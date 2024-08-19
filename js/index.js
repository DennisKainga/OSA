const revealMap = (curIndex) => {
  const mcItems = document.querySelectorAll(".mc-item");

  mcItems.forEach((item, index) => {
    if (index === curIndex) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

const getButtonPosition = (e) => {
  const button = e.target;
  const curIndex = parseInt(button.getAttribute("data-index"));
  const buttons = document.querySelectorAll(".btn-select");
  const slider = document.querySelector(".slider");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  const { left, width } = button.getBoundingClientRect();

  slider.style.width = `${width}px`;
  slider.style.left = `${left}px`;

  revealMap(curIndex);
};

const setUpBtnEventlisterners = () => {
  const buttons = document.querySelectorAll(".btn-select");
  if (!buttons) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", getButtonPosition);
  });
};

const resizeEvent = () => {
  const { left, width } = document.querySelector(".btn-select.active").getBoundingClientRect();
  const slider = document.querySelector(".slider");

  if (!slider) return;
  slider.style.transition = "width 0ms ease, left 0ms ease";
  slider.style.width = `${width}px`;
  slider.style.left = `${left}px`;

  requestAnimationFrame(() => {
    slider.style.transition = "width 250ms ease, left 250ms ease";
  });
};

const splideSetUp = () => {
  var splide = new Splide("#primary", {
    type: "loop",
    perPage: 3,
    focus: "center",
  });

  splide.mount();

  // var splide2 = new Splide("#secondary", {
  //   type: "loop",
  //   perPage: 1,
  //   // focus: "center",
  //   autoplay: true,
  // });

  // splide2.mount();

  var splide2 = new Splide("#secondary", {
    autoplay: true,
    perPage: 1,
    type: "loop",
  });
  var bar = splide2.root.querySelector(".my-slider-progress-bar");

  // Updates the bar width whenever the carousel moves:
  splide2.on("mounted move", function () {
    var end = splide2.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide2.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  splide2.mount();
};

document.addEventListener("DOMContentLoaded", function () {
  splideSetUp();
  setUpBtnEventlisterners();
  resizeEvent();
  window.addEventListener("resize", resizeEvent);
});
