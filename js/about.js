let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const handleRevealAnimations = () => {
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

document.addEventListener("DOMContentLoaded", handleRevealAnimations);
