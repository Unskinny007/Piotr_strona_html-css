function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const link = dropdown.querySelector("a");

      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    });
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollThreshold = 200;

function toggleVisibility() {
  if (
    window.scrollY > scrollThreshold ||
    document.documentElement.scrollTop > scrollThreshold
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleVisibility);
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("DOMContentLoaded", toggleVisibility);
