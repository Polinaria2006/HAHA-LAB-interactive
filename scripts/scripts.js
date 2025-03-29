document.addEventListener("DOMContentLoaded", function () {
  const smileFace = document.querySelector(".smileface");

  function handleMouseMove(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (e.clientX - centerX) / 30;
    const offsetY = (e.clientY - centerY) / 30;

    smileFace.style.transform = `
          perspective(1000px)
          rotateX(${-offsetY}deg)
          rotateY(${offsetX}deg)
      `;
  }

  document.addEventListener("mousemove", handleMouseMove);

  document.addEventListener("mouseleave", () => {
    smileFace.style.transform = "none";
  });

  const imgs = document.querySelectorAll(
    ".machimg1, .machimg2, .machimg3, .machimg4"
  );
  const nextBtn = document.querySelector(".machclick");

  let currentIndex = 0;

  function showCurrentSection() {
    imgs.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add("block");
        img.classList.remove("none");
      } else {
        img.classList.remove("block");
        img.classList.add("none");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    showCurrentSection();
  });

  showCurrentSection();

  const coctails = document.querySelectorAll(".coctail1, .coctail2, .coctail3");
  const nextcoctBtn = document.querySelector(".starbtn");

  let currentIndex2 = 0;

  function showCurrentSection2() {
    coctails.forEach((img, index) => {
      if (index === currentIndex2) {
        img.classList.add("block");
        img.classList.remove("none");
      } else {
        img.classList.remove("block");
        img.classList.add("none");
      }
    });
  }

  nextcoctBtn.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % coctails.length;
    showCurrentSection2();
  });

  showCurrentSection2();
});
