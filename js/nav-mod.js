const toggleNav = () => {
  document.querySelector(".collapsable-nav").classList.toggle("show");
};

const setUpEventListeners = () => {
  const burger = document.querySelector(".hamburger-svg");

  burger.addEventListener("click", toggleNav);
};

document.addEventListener("DOMContentLoaded", setUpEventListeners);
