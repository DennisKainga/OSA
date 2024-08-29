const handleArrayLooping = (arr, curIndex) => {
  arr.forEach((el, index) => {
    if (curIndex === index) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
};

const handleClick = (e, curIndex) => {
  const curProperty = document.querySelector(".current-property");
  const btns = document.querySelectorAll(".switcher-btn");
  const descriptions = document.querySelectorAll(".property-desc");
  const properyContainers = document.querySelectorAll(".property-container");

  curProperty.textContent = e.target.getAttribute("content").trim();

  btns.forEach((btn, index) => {
    if (curIndex === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  handleArrayLooping(descriptions, curIndex);
  handleArrayLooping(properyContainers, curIndex);
};

const addClickEvents = () => {
  const btns = document.querySelectorAll(".switcher-btn");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      handleClick(e, index);
    });
  });
};

document.addEventListener("DOMContentLoaded", addClickEvents);
