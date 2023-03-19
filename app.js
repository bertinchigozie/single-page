const images = document.querySelectorAll(".img");

const btnR = document.querySelector(".right-btn");
const btnL = document.querySelector(".left-btn");
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".sectBtn");

const goToSlide = (slide) => {
  if (slide === 0) {
    images.forEach((img, i) => {
      img.style.transform = `translateX(${100 * i}%)`;
    });
  }
};

goToSlide(0);
let currImg = 0;
imgLen = images.length - 1;
btnR.addEventListener("click", () => {
  if (currImg === imgLen) {
    btnR.style.display = `none`;
  } else {
    currImg++;
    btnR.style.display = `block`;
    btnL.style.display = `block`;
  }
  images.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - currImg)}%)`;
    img.style.transition = `all 1s ease-out`;
  });
});
btnL.addEventListener("click", () => {
  if (currImg === 0) {
    btnL.style.display = `none`;
  } else {
    btnL.style.display = `block`;
    btnR.style.display = `block`;
    currImg--;
  }
  images.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - currImg)}%)`;
    img.style.transition = `all 1s ease-out`;
  });
});

function Changepage() {
  sectBtns.forEach((sectBtn) => {
    sectBtn.addEventListener("click", function (e) {
      const id = e.target.dataset.id;

      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === id) {
          if (section.classList.contains("active")) {
          } else {
            section.classList.add("active");
          }
          console.log(section);
        }
      });
    });
  });
}

Changepage();
