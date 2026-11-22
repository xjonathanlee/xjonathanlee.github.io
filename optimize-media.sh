#!/usr/bin/env bash
# optimize-media.sh — run from your site root (the folder containing img/ and css/).
# Needs: ffmpeg (includes ffprobe).
# Optimizes ONLY the .mp4 videos in img/Riverrunner/ (no images). Originals are copied to ../media-originals-backup first.
set -euo pipefail
shopt -s nullglob nocaseglob

DIR="img/Riverrunner"
BACKUP="../media-originals-backup"

[ -d "$DIR" ] || { echo "Can't find $DIR. Run this from your site root."; exit 1; }
for tool in ffmpeg ffprobe; do
  command -v "$tool" >/dev/null || { echo "Missing tool: $tool"; exit 1; }
done

mkdir -p "$BACKUP"
rm -f "$DIR"/*.tmp.mp4            # leftovers from an interrupted run

videos=("$DIR"/*.mp4)
total=${#videos[@]}
[ "$total" -gt 0 ] || { echo "No .mp4 videos found in $DIR"; exit 0; }

done_count=0
failed=()
summary=()

# draw <item_percent 0-100> <label>  — overall bar counts finished videos plus the current one's progress
draw() {
  local item=$1 label=$2 width=30
  local pct=$(( (done_count * 100 + item) / total ))
  (( pct > 100 )) && pct=100
  local f=$(( pct * width / 100 ))
  local filled empty
  filled=$(printf '%*s' "$f" '' | tr ' ' '#')
  empty=$(printf '%*s' "$(( width - f ))" '' | tr ' ' '-')
  printf '\r\033[K[%s%s] %3d%%  (%d/%d)  %s' "$filled" "$empty" "$pct" "$done_count" "$total" "$label"
}

backup() {  # copy original once; never overwrite an existing backup
  [ -e "$BACKUP/$(basename "$1")" ] || cp "$1" "$BACKUP/"
}

# ---------- Videos -> 720p H.264 with faststart (same filenames) ----------
for f in "${videos[@]}"; do
  name="$(basename "$f")"
  backup "$f"
  src="$BACKUP/$name"
  tmp="${f%.*}.tmp.mp4"
  orig_size="$(du -h "$src" | cut -f1)"

  dur_us="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src" 2>/dev/null | awk '{printf "%d", $1*1000000}')"
  dur_us="${dur_us:-0}"
  draw 0 "$name"

  if ffmpeg -nostdin -y -v error -progress pipe:1 -nostats -i "$src" \
       -vf "scale='min(1280,iw)':-2" \
       -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -preset slow -crf 26 \
       -c:a aac -b:a 128k -movflags +faststart "$tmp" \
     | while IFS='=' read -r key val; do
         if [[ "$key" == out_time_us || "$key" == out_time_ms ]] && [[ "$val" =~ ^[0-9]+$ ]] && (( dur_us > 0 )); then
           p=$(( val * 100 / dur_us )); (( p > 99 )) && p=99
           draw "$p" "$name"
         fi
       done; then
    mv "$tmp" "$f"
    summary+=("$name  $orig_size -> $(du -h "$f" | cut -f1)")
  else
    rm -f "$tmp"
    failed+=("$name")
  fi
  done_count=$(( done_count + 1 ))
done

draw 0 "finished"; printf '\n\n'
echo "Results:"
for line in "${summary[@]}"; do echo "  $line"; done
if [ "${#failed[@]}" -gt 0 ]; then
  echo; echo "FAILED (originals left untouched):"
  for line in "${failed[@]}"; do echo "  $line"; done
fi
echo; echo "ALL DONE. Backups are in $BACKUP — test on your phone before deleting them."
