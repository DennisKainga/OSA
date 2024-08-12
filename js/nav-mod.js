const toggleNav = () => {
  document.querySelector(".collapsable-nav").classList.toggle("show");
};

const handleResize = () => {
  const gap = 25;
  const cardWidth = 330;
  const packageContainer = document.querySelector(".store-cards-width-referer");
  const { width } = packageContainer.getBoundingClientRect();
  const maxNum = Math.trunc(width / cardWidth);
  const totalGap = (maxNum - 1) * gap;
  const recalculatedWidth = cardWidth * maxNum + totalGap;
  document.documentElement.style.setProperty("--store-cards-width", `${recalculatedWidth}px`);
};
const setUpEventListeners = () => {
  const burger = document.querySelector(".hamburger-svg");
  handleResize();
  burger.addEventListener("click", toggleNav);
  window.addEventListener("resize", handleResize);
};

document.addEventListener("DOMContentLoaded", setUpEventListeners);
