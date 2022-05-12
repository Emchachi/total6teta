document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// MOBILE NAVIGATION
const btnNav = document.querySelector(".btn-main-nav");
const headerEl = document.querySelector(".header");
const hideHero = document.querySelector(".hero");
const hideDesc = document.querySelector(".description-container");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    hideHero.classList.add("hide");
    hideDesc.classList.add("hide");
  } else {
    hideHero.classList.remove("hide");
    hideDesc.classList.remove("hide");
  }
});
