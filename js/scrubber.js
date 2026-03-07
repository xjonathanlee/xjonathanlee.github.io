document.addEventListener("DOMContentLoaded", function() {
  // ============================================================
  // CONFIGURATION — replace with your actual image paths.
  // ============================================================
  const frames = [
    { src: "img/raincoast/image01.jpg", caption: "" },
    { src: "img/raincoast/image02.jpg", caption: "" },
    { src: "img/raincoast/image03.jpg", caption: "" },
    { src: "img/raincoast/image04.jpg", caption: "" },
    { src: "img/raincoast/image05.jpg", caption: "" },
    { src: "img/raincoast/image06.jpg", caption: "" },
    { src: "img/raincoast/image07.jpg", caption: "" }
  ];
  // ============================================================

  const scrubber    = document.getElementById("scrubber");
  const cursor      = document.getElementById("cursor");
  const frameLabel  = document.getElementById("frameLabel");
  const scrubFill   = document.getElementById("scrubFill");
  const currentFrame = document.getElementById("currentFrame");
  const totalFrames = document.getElementById("totalFrames");

  let activeIndex = 0;
  let imgEls = [];

  // Set total frames
  totalFrames.textContent = String(frames.length).padStart(2, "0");

  // Create all image elements and append them to scrubber
  frames.forEach((frame, i) => {
    const img = document.createElement("img");
    img.src = frame.src;
    img.className = i === 0 ? "active" : "";
    img.alt = `Frame ${i + 1}`;
    scrubber.appendChild(img);
    imgEls.push(img);
  });

  function pad(n) { return String(n).padStart(2, "0"); }

  function scrubTo(pct) {
    pct = Math.max(0, Math.min(1, pct));
    const index = Math.min(Math.floor(pct * frames.length), frames.length - 1);

    if (index !== activeIndex) {
      imgEls[activeIndex].classList.remove("active");
      imgEls[index].classList.add("active");
      activeIndex = index;
      frameLabel.textContent = `${pad(index + 1)} / ${pad(frames.length)}`;
      currentFrame.textContent = pad(index + 1);
    }

    cursor.style.left = `${pct * 100}%`;
    scrubFill.style.width = `${pct * 100}%`;
  }

  function getX(e) {
    const rect = scrubber.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return (clientX - rect.left) / rect.width;
  }

  scrubber.addEventListener("mousemove", (e) => scrubTo(getX(e)));
  scrubber.addEventListener("touchmove", (e) => { e.preventDefault(); scrubTo(getX(e)); }, { passive: false });

  scrubTo(0);
});