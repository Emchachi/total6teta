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

// IMAGE CAROUSEL

const images = document.querySelectorAll(".gallery-img");
let imgIndex;
let imgSrc;

images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;

    imgModal(imgSrc);

    imgIndex = i;
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");

  document.querySelector(".section-gallery").append(modal);

  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);

  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");

  closeBtn.addEventListener("click", () => {
    modal.remove();
  });

  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");

  nextBtn.addEventListener("click", () => {
    newImage.setAttribute("src", nextImg());
  });

  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");

  prevBtn.addEventListener("click", () => {
    newImage.setAttribute("src", prevImg());
  });

  modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

const nextImg = () => {
  imgIndex++;

  if (imgIndex >= images.length) {
    imgIndex = 0;
  }

  return images[imgIndex].src;
};

const prevImg = () => {
  imgIndex--;
  console.log(imgIndex);

  if (imgIndex < 0) {
    imgIndex = images.length - 1;
  }

  return images[imgIndex].src;
};
