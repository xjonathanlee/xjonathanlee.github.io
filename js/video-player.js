  const video = document.getElementById('heroVideo');
  const audioBtn = document.getElementById('audioToggle');
  const videoSplash = document.getElementById('videoSplash');
  const splashPlayBtn = document.getElementById('splashPlay');
  const menuNav = document.querySelector('.editorial-nav');
  const menuBtn = document.getElementById('menuBtn');

  video.muted = false;

  function updateAudioButton() {
    audioBtn.textContent = video.muted ? 'Unmute' : 'Mute';
  }

  splashPlayBtn.addEventListener('click', async function() {
    video.muted = false;
    updateAudioButton();

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error('Video playback failed:', error);
        return;
      }
    }

    videoSplash.classList.add('hidden');
  });

  // Toggle audio state
  audioBtn.addEventListener('click', function() {
    video.muted = !video.muted;
  });
  video.addEventListener('volumechange', updateAudioButton);
  updateAudioButton();

  function closeMenu() {
    menuNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', function() {
    const isOpen = menuNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  video.addEventListener('click', function() {
    if (menuNav.classList.contains('open')) {
      closeMenu();
      return;
    }
    if (video.paused) { video.play(); } else { video.pause(); }
  });

  // 15-Second Inactivity Fade-Out Logic
  let fadeTimeout;

  function resetMenuTimer() {
    // Show the menu immediately on activity
    menuNav.classList.remove('hidden');
    
    // Clear any existing countdown
    clearTimeout(fadeTimeout);
    
    // Keep an open mobile menu visible until it is closed.
    fadeTimeout = setTimeout(() => {
      if (!menuNav.classList.contains('open')) {
        menuNav.classList.add('hidden');
      }
    }, 15000);
  }

  // Initialize the timer when the page loads
  resetMenuTimer();

  // Reset the timer whenever the user moves the mouse, presses a key, or touches the screen
  window.addEventListener('mousemove', resetMenuTimer);
  window.addEventListener('keydown', resetMenuTimer);
  window.addEventListener('touchstart', resetMenuTimer, { passive: true });

  // ---- Video controls: play/pause + scrubber ----
  const controls = document.getElementById('videoControls');
  const playBtn  = document.getElementById('vcPlay');
  const scrub    = document.getElementById('vcScrub');
  const fillEl   = document.getElementById('vcFill');
  const bufEl    = document.getElementById('vcBuffered');
  const thumbEl  = document.getElementById('vcThumb');
  const tipEl    = document.getElementById('vcTip');
  const timeEl   = document.getElementById('vcTime');

  let dragging = false;
  let resumeAfterDrag = false;
  let dragRatio = 0;
  let rafId = 0;
  let idleTimer = 0;

  function hasDuration() {
    return isFinite(video.duration) && video.duration > 0;
  }

  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    const ss = (s < 10 ? '0' : '') + s;
    if (h > 0) return h + ':' + (m < 10 ? '0' : '') + m + ':' + ss;
    return m + ':' + ss;
  }

  // Fill, handle and time readout (runs every frame while playing)
  function render() {
    const dur = hasDuration() ? video.duration : 0;
    const t = dragging ? dragRatio * dur : video.currentTime;
    const ratio = dur ? Math.min(1, Math.max(0, t / dur)) : 0;
    const pct = (ratio * 100) + '%';
    fillEl.style.width = pct;
    thumbEl.style.left = pct;
    timeEl.textContent = fmt(t) + ' / ' + fmt(dur);
  }

  // Slider semantics for screen readers (not needed every frame)
  function renderAria() {
    const dur = hasDuration() ? video.duration : 0;
    const t = video.currentTime;
    scrub.setAttribute('aria-valuemax', String(Math.floor(dur)));
    scrub.setAttribute('aria-valuenow', String(Math.floor(t)));
    scrub.setAttribute('aria-valuetext', fmt(t) + ' of ' + fmt(dur));
  }

  function renderBuffered() {
    if (!hasDuration() || !video.buffered.length) {
      bufEl.style.width = '0%';
      return;
    }
    const t = video.currentTime;
    let end = 0;
    for (let i = 0; i < video.buffered.length; i++) {
      if (video.buffered.start(i) <= t && t <= video.buffered.end(i)) {
        end = video.buffered.end(i);
        break;
      }
    }
    bufEl.style.width = Math.min(100, (end / video.duration) * 100) + '%';
  }

  function syncPlayButton() {
    const playing = !video.paused || (dragging && resumeAfterDrag);
    playBtn.classList.toggle('is-playing', playing);
    playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  }

  function loop() {
    render();
    rafId = requestAnimationFrame(loop);
  }

  function togglePlay() {
    if (video.paused) {
      video.play().catch(function () {});
    } else {
      video.pause();
    }
  }

  // Auto-hide the bar a few seconds after the last activity, but only while playing
  function showControls() {
    controls.classList.remove('is-idle');
    clearTimeout(idleTimer);
    if (video.paused || dragging) return;
    idleTimer = setTimeout(function () {
      if (video.paused || dragging) return;
      if (controls.querySelector(':focus-visible')) return;
      if (window.matchMedia('(hover: hover)').matches && controls.querySelector('.vc-bar:hover')) return;
      controls.classList.add('is-idle');
    }, 3000);
  }

  // ---- play / pause wiring ----
  playBtn.addEventListener('click', togglePlay);

  video.addEventListener('play', function () {
    syncPlayButton();
    cancelAnimationFrame(rafId);
    loop();
    showControls();
  });

  video.addEventListener('pause', function () {
    syncPlayButton();
    if (!dragging) {
      cancelAnimationFrame(rafId);
      render();
    }
    showControls();
  });

  ['loadedmetadata', 'durationchange', 'seeked', 'timeupdate', 'progress'].forEach(function (ev) {
    video.addEventListener(ev, function () {
      renderBuffered();
      renderAria();
      if (!dragging) render();
    });
  });

  // ---- scrubbing (mouse, touch and pen via pointer events) ----
  function ratioFromEvent(e) {
    const r = scrub.getBoundingClientRect();
    if (!r.width) return 0;
    return Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  }

  // ---- preview picture: a hidden copy of the video is seeked to the hovered time
  //      and drawn onto the canvas inside the time bubble. Frames are cached
  //      per 2-second bucket so revisiting a spot is instant. ----
  const thumbCanvas = document.getElementById('vcThumbCanvas');
  const thumbCtx    = thumbCanvas.getContext('2d');
  const tipTimeEl   = document.getElementById('vcTipTime');
  const BUCKET = 2;                      // seconds per cached picture
  const previewCache = new Map();
  let previewVideo = null;
  let previewReady = false;
  let previewBusy = false;
  let previewSeekKey = null;
  let previewWanted = null;

  function drawThumb(src) {
    thumbCtx.drawImage(src, 0, 0, thumbCanvas.width, thumbCanvas.height);
  }

  function setupPreview() {
    if (previewVideo) return;
    previewVideo = document.createElement('video');
    previewVideo.muted = true;
    previewVideo.playsInline = true;
    previewVideo.preload = 'metadata';   // only the bytes it seeks to get fetched
    previewVideo.addEventListener('loadedmetadata', function () {
      if (previewVideo.videoWidth) {     // match the video's real aspect ratio
        thumbCanvas.height = Math.round(thumbCanvas.width * previewVideo.videoHeight / previewVideo.videoWidth);
      }
      previewReady = true;
      if (previewWanted !== null) requestPreview(previewWanted * BUCKET);
    });
    previewVideo.addEventListener('seeked', onPreviewSeeked);
    previewVideo.addEventListener('error', function () { thumbCanvas.style.display = 'none'; });
    previewVideo.src = video.currentSrc || video.querySelector('source').src;
  }

  function requestPreview(t) {
    const key = Math.floor(t / BUCKET);
    previewWanted = key;
    const cached = previewCache.get(key);
    if (cached) { drawThumb(cached); return; }
    if (!previewReady || previewBusy) return;   // latest wanted key is picked up after the current seek
    previewBusy = true;
    previewSeekKey = key;
    const target = Math.min(previewVideo.duration - 0.05, key * BUCKET + BUCKET / 2);
    if (Math.abs(previewVideo.currentTime - target) < 0.01) {
      onPreviewSeeked();                         // already there, no 'seeked' event will come
    } else {
      previewVideo.currentTime = target;
    }
  }

  function onPreviewSeeked() {
    previewBusy = false;
    const snap = document.createElement('canvas');
    snap.width = thumbCanvas.width;
    snap.height = thumbCanvas.height;
    snap.getContext('2d').drawImage(previewVideo, 0, 0, snap.width, snap.height);
    previewCache.set(previewSeekKey, snap);
    if (previewWanted === previewSeekKey) {
      drawThumb(snap);
    } else if (previewWanted !== null) {
      requestPreview(previewWanted * BUCKET);    // pointer moved on while seeking
    }
  }

  function showTip(e) {
    if (!hasDuration()) return;
    const r = scrub.getBoundingClientRect();
    const x = Math.min(r.width, Math.max(0, e.clientX - r.left));
    const t = (x / r.width) * video.duration;
    tipTimeEl.textContent = fmt(t);
    setupPreview();
    requestPreview(t);
    const half = tipEl.offsetWidth / 2;
    tipEl.style.left = Math.min(r.width - half, Math.max(half, x)) + 'px';
    tipEl.classList.add('show');
  }

  scrub.addEventListener('pointerdown', function (e) {
    if (!hasDuration()) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    resumeAfterDrag = !video.paused;
    if (resumeAfterDrag) video.pause();   // avoids audio stutter while dragging
    scrub.setPointerCapture(e.pointerId);
    scrub.classList.add('is-dragging');
    dragRatio = ratioFromEvent(e);
    video.currentTime = dragRatio * video.duration;
    showTip(e);
    syncPlayButton();
    render();
    showControls();
  });

  scrub.addEventListener('pointermove', function (e) {
    showTip(e);
    if (!dragging) return;
    dragRatio = ratioFromEvent(e);
    video.currentTime = dragRatio * video.duration;
    render();
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    scrub.classList.remove('is-dragging');
    if (e.pointerType !== 'mouse') tipEl.classList.remove('show');
    if (resumeAfterDrag) video.play().catch(function () {});
    resumeAfterDrag = false;
    syncPlayButton();
    showControls();
  }

  scrub.addEventListener('pointerup', endDrag);
  scrub.addEventListener('pointercancel', endDrag);
  scrub.addEventListener('pointerleave', function () {
    if (!dragging) tipEl.classList.remove('show');
  });

  // Keyboard on the scrubber: arrows = 5s, Home/End = start/end
  scrub.addEventListener('keydown', function (e) {
    if (!hasDuration()) return;
    let t = video.currentTime;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':  t -= 5; break;
      case 'ArrowRight':
      case 'ArrowUp':    t += 5; break;
      case 'Home':       t = 0; break;
      case 'End':        t = video.duration; break;
      default: return;
    }
    e.preventDefault();
    video.currentTime = Math.min(video.duration, Math.max(0, t));
    render();
    renderAria();
  });

  // Page-level shortcuts: Space/K play-pause, ←/→ seek 5s, M mute
  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (!videoSplash.classList.contains('hidden')) return;   // splash still showing
    const onSlider = e.target.closest && e.target.closest('[role="slider"]');
    const onAction = e.target.closest && e.target.closest('a, button');
    switch (e.key) {
      case ' ':
        if (onAction) return;
        e.preventDefault();
        togglePlay();
        break;
      case 'k':
      case 'K':
        togglePlay();
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        if (onSlider || !hasDuration()) return;
        e.preventDefault();
        video.currentTime = Math.min(video.duration, Math.max(0, video.currentTime + (e.key === 'ArrowRight' ? 5 : -5)));
        break;
      case 'm':
      case 'M':
        video.muted = !video.muted;
        break;
    }
  });

  // Wake the bar on any activity
  window.addEventListener('mousemove', showControls);
  window.addEventListener('keydown', showControls);
  window.addEventListener('touchstart', showControls, { passive: true });

  syncPlayButton();
  render();
  renderAria();

  // ---- Up next: 10-second countdown when the video ends ----
  // The next video is whatever follows this page in the menu list; after the
  // last video the countdown returns to the Index (the first menu link).
  const upNext      = document.getElementById('upNext');
  const upNextLabel = document.getElementById('upNextLabel');
  const upNextTitle = document.getElementById('upNextTitle');
  const upNextSecs  = document.getElementById('upNextSecs');
  const upNextRing  = document.getElementById('upNextRing');

  const COUNTDOWN_MS = 10000;
  const RING_LEN = 2 * Math.PI * 21;
  let countdownTimer = 0;
  let countdownRaf = 0;
  let countdownEnd = 0;

  const navLinks = Array.from(document.querySelectorAll('.nav-item a'));
  const thisFile = location.pathname.split('/').pop();
  const thisIndex = navLinks.findIndex(function (a) { return a.getAttribute('href') === thisFile; });
  let nextHref = null;
  let nextName = '';
  let nextLabel = 'Up next';

  if (thisIndex > -1 && navLinks.length > 1) {
    const isLast = thisIndex === navLinks.length - 1;
    const link = isLast ? navLinks[0] : navLinks[thisIndex + 1];
    nextName = link.textContent.trim();
    // ?autoplay=1 lets the next page start by itself (see the bottom of this script)
    nextHref = link.getAttribute('href') + (isLast ? '' : '?autoplay=1');
    nextLabel = isLast ? 'Returning to' : 'Up next';
  }

  function hideUpNext() {
    cancelAnimationFrame(countdownRaf);
    clearTimeout(countdownTimer);
    countdownRaf = 0;
    countdownTimer = 0;
    upNext.classList.remove('is-visible');
  }

  function goNext() {
    hideUpNext();
    window.location.href = nextHref;
  }

  // Runs every frame: the ring fills clockwise from empty to full over 10s
  function tickCountdown() {
    const remaining = Math.max(0, countdownEnd - Date.now());
    upNextSecs.textContent = String(Math.ceil(remaining / 1000));
    upNextRing.style.strokeDashoffset = String(RING_LEN * (remaining / COUNTDOWN_MS));
    if (remaining > 0) countdownRaf = requestAnimationFrame(tickCountdown);
  }

  function startCountdown() {
    if (!nextHref) return;
    upNextLabel.textContent = nextLabel;
    upNextTitle.textContent = nextName;
    upNextRing.style.strokeDasharray = String(RING_LEN);
    upNextRing.style.strokeDashoffset = String(RING_LEN);   // start empty
    countdownEnd = Date.now() + COUNTDOWN_MS;
    cancelAnimationFrame(countdownRaf);
    clearTimeout(countdownTimer);
    tickCountdown();
    // timer does the navigation, so it still happens if the tab is in the background
    countdownTimer = setTimeout(goNext, COUNTDOWN_MS);
    upNext.classList.add('is-visible');
  }

  video.addEventListener('ended', startCountdown);

  // Replaying or scrubbing back into the video cancels the countdown
  video.addEventListener('play', hideUpNext);
  video.addEventListener('seeked', function () {
    if (hasDuration() && video.currentTime < video.duration - 0.5) hideUpNext();
  });

  document.getElementById('upNextGo').addEventListener('click', goNext);
  document.getElementById('upNextCancel').addEventListener('click', hideUpNext);
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideUpNext();
  });
  window.addEventListener('pagehide', hideUpNext);

  // Arriving from the previous video's countdown: start right away.
  // Browsers may block sound without a tap, so fall back to muted playback
  // (the Unmute button is already there) and finally to the normal Play splash.
  if (new URLSearchParams(location.search).get('autoplay') === '1') {
    video.muted = false;
    updateAudioButton();
    video.play().then(function () {
      videoSplash.classList.add('hidden');
    }).catch(function () {
      video.muted = true;
      updateAudioButton();
      video.play().then(function () {
        videoSplash.classList.add('hidden');
      }).catch(function () {});
    });
  }
