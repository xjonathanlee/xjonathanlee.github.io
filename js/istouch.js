function isTouchDevice() {
  return window.matchMedia('(hover: none)').matches;
}

if (isTouchDevice()) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const alreadyActive = link.classList.contains('is-tapped');
      links.forEach((l) => l.classList.remove('is-tapped'));

      if (alreadyActive) {
        hideAll();
        link.classList.remove('is-tapped');
        // allow the actual navigation to proceed if tapped twice
      } else {
        e.preventDefault(); // first tap previews, doesn't navigate yet
        showPortrait(link.dataset.target);
        link.classList.add('is-tapped');
      }
    });
  });
} else {
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => showPortrait(link.dataset.target));
  });
  document.querySelector('.name-list').addEventListener('mouseleave', hideAll);
}