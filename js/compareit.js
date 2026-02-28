window.addEventListener("load", initComparisons);

function initComparisons() {
  var x = document.getElementsByClassName("img-comp-overlay");
  for (var i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(overlay) {
    var slider, clicked = 0;
    var container = overlay.parentElement;

    function getW() { return container.offsetWidth; }
    function getH() { return container.offsetHeight; }

    function reset() {
      var w = getW();
      if (w === 0) return;
      overlay.style.width = (w / 2) + "px";
      slider.style.left   = (w / 2) - (slider.offsetWidth / 2) + "px";
      syncOverlayImg();
    }

    // Container
    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.display  = "block";

    // Base image — sets natural height of container
    var baseImg = container.querySelector(".img-comp-img:not(.img-comp-overlay)");
    var baseImgEl = baseImg ? baseImg.querySelector("img") : null;
    if (baseImg) {
      baseImg.style.position = "relative";
      baseImg.style.display  = "block";
      baseImg.style.width    = "100%";
    }
    if (baseImgEl) {
      baseImgEl.style.display = "block";
      baseImgEl.style.width   = "100%";
      baseImgEl.style.height  = "auto";
    }

    // Overlay div — absolutely on top, same size as container
    overlay.style.position = "absolute";
    overlay.style.top      = "0";
    overlay.style.left     = "0";
    overlay.style.height   = "100%";
    overlay.style.overflow = "hidden";

    // Overlay inner img — must match base image exactly
    var overlayImg = overlay.querySelector("img");
    function syncOverlayImg() {
      if (!overlayImg) return;
      var w = getW();
      var h = getH();
      overlayImg.style.display  = "block";
      overlayImg.style.width    = w + "px";
      overlayImg.style.height   = h + "px"; // lock to same rendered height as base
      overlayImg.style.maxWidth = "none";
      overlayImg.style.objectFit = "cover"; // or "fill" if images are same aspect ratio
      overlayImg.style.objectPosition = "left top";
    }

    // Create drag handle
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    slider.style.position = "absolute";
    slider.style.top      = "0";
    slider.style.bottom   = "0";
    slider.style.margin   = "auto 0";
    slider.style.zIndex   = "9";
    container.appendChild(slider);

    setTimeout(reset, 0);

    var ro = new ResizeObserver(function() {
      reset();
    });
    ro.observe(container);

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady, { passive: false });
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove, { passive: false });
    }

    function slideFinish() {
      clicked = 0;
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    }

    function slideMove(e) {
      if (clicked === 0) return;
      e.preventDefault();
      var pos = getCursorPos(e);
      var w   = getW();
      pos = Math.max(0, Math.min(w, pos));
      slide(pos);
    }

    function getCursorPos(e) {
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      var rect = container.getBoundingClientRect();
      return e.clientX - rect.left;
    }

    function slide(x) {
      overlay.style.width = x + "px";
      slider.style.left   = x - (slider.offsetWidth / 2) + "px";
      syncOverlayImg();
    }
  }
}
