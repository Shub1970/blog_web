const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const icon_close = document.querySelector(".icon-close");
const hamburder = document.querySelector(".hamburger");

mobile_nav_toggle.addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") == "false") {
    this.setAttribute("aria-expanded", "true");
    hamburder.style.display = "none";
    icon_close.style.display = "block";
  } else {
    this.setAttribute("aria-expanded", "false");
    hamburder.style.display = "block";
    icon_close.style.display = "none";
  }
});

const links = document.querySelectorAll(".main-nav a[aria-expanded]");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      link.setAttribute("aria-expanded", "false");
    });
    this.setAttribute("aria-expanded", "true");
  });
});
