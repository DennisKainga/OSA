let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const toggleNav = () => {
  document.querySelector(".collapsable-nav").classList.toggle("show");
  document.querySelector(".burger").classList.toggle("show");
};

const handleResize = () => {
  const gap = 25;
  const cardWidth = 330;
  const packageContainer = document.querySelector(".store-cards-width-referer");
  if (!packageContainer) return;
  const { width } = packageContainer.getBoundingClientRect();
  const maxNum = Math.trunc(width / cardWidth);
  const totalGap = (maxNum - 1) * gap;
  const recalculatedWidth = cardWidth * maxNum + totalGap;
  document.documentElement.style.setProperty("--store-cards-width", `${recalculatedWidth}px`);
};

const setUpEventListeners = () => {
  const burger = document.querySelector(".burger");
  handleResize();
  burger.addEventListener("click", toggleNav);
  window.addEventListener("resize", handleResize);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("show");
      } else {
        return;
        if (el.target.classList.contains("Hero-pattern")) return;
        el.target.classList.remove("show");
      }
    });
  }, options);

  const pageImages = document.querySelectorAll(".animatable-img");
  pageImages.forEach((image) => {
    observer.observe(image);
  });
};

document.addEventListener("DOMContentLoaded", setUpEventListeners);
