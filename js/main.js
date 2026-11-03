// Odonis Odonis — mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains("open"));
  });

  // Close after choosing a link, on Escape, or on a tap outside the menu
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target)) setOpen(false);
  });

  // Reset if the screen is widened past the mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000 && nav.classList.contains("open")) setOpen(false);
  });
});
