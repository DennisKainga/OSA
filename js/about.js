let curIndex;
const handleDropdowns = (index) => {
  const dropdowns = document.querySelectorAll(".type");

  if (curIndex === index) {
    dropdowns[index].classList.remove("show");
    dropdowns[index].querySelector(
      "button"
    ).innerHTML = `READ MORE <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    curIndex = null;
    return;
  }
  dropdowns.forEach((el, i) => {
    if (i === index) {
      el.classList.add("show");
      el.querySelector(
        "button"
      ).innerHTML = `SHOW LESS <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    } else {
      el.classList.remove("show");
      el.querySelector(
        "button"
      ).innerHTML = `READ MORE <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    }
  });

  curIndex = index;
};

let pausableSPlide;
let curouselIndex = 0;

const splideSetUp = () => {
  var splide = new Splide("#primary", {
    type: "slide",
    perPage: 1,
    focus: 0,
  });

  splide.mount();

  var splide2 = new Splide("#secondary", {
    type: "fade",
    rewind: true,
    autoplay: true,
  });

  pausableSPlide = splide2;

  splide2.on("moved", (newIndex) => {
    const mallTitles = document.querySelectorAll(".mt");

    mallTitles.forEach((el, i) => {
      if (i === newIndex) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
    curouselIndex = newIndex;
  });

  splide2.mount();
};

const toggleReadMore = () => {
  document.querySelector(".mall-demo-full-bleed").classList.toggle("show");
  document.querySelector("body").classList.toggle("demo-showing");

  const demos = document.querySelectorAll(".mall-demo");
  demos.forEach((el, i) => {
    if (i === curouselIndex) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  splideSetUp();
});
