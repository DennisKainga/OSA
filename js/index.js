document.addEventListener("DOMContentLoaded", function () {
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
});
