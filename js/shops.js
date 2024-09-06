const availableShops = [
  {
    branch: "OSA Langata road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 743,
    rent: { rentText: "48,000", rentNum: 48000 },
    imgPath: "./img/Empty/F02/img2.jpg",
    imgArr: [
      "./img/Empty/F02/img1.jpg",
      "./img/Empty/F02/img2.jpg",
      "./img/Empty/F02/img3.jpg",
      "./img/Empty/F02/img4.jpg",
      "./img/Empty/F02/img5.jpg",
    ],
  },
  {
    branch: "OSA Langata road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 650,
    rent: { rentText: "70,000", rentNum: 70000 },
    imgPath: "./img/Empty/F01G/img4.jpg",
    imgArr: ["./img/Empty/F01G/img1.jpg", "./img/Empty/F01G/img2.jpg", "./img/Empty/F01G/img3.jpg", "./img/Empty/F01G/img4.jpg"],
  },
  {
    branch: "OSA Langata road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 896.64,
    rent: { rentText: "40,000", rentNum: 40000 },
    imgPath: "./img/Empty/S06/img7.jpg",
    imgArr: [
      "./img/Empty/S06/img1.jpg",
      "./img/Empty/S06/img2.jpg",
      "./img/Empty/S06/img3.jpg",
      "./img/Empty/S06/img4.jpg",
      "./img/Empty/S06/img5.jpg",
      "./img/Empty/S06/img6.jpg",
      "./img/Empty/S06/img7.jpg",
    ],
  },
  {
    branch: "OSA Langata road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 1098.12,
    rent: { rentText: "10,000", rentNum: 10000 },
    imgPath: "./img/Empty/S10/img3.jpg",
    imgArr: [
      "./img/Empty/S10/img1.jpg",
      "./img/Empty/S10/img2.jpg",
      "./img/Empty/S10/img3.jpg",
      "./img/Empty/S10/img4.jpg",
      "./img/Empty/S10/img5.jpg",
      "./img/Empty/S10/img6.jpg",
    ],
  },
];

let curBranch = "All";
let curFloor = "All";
let curSize = "All";
let curRent = "All";

const applyAllFilters = (arr) => {
  let modArray = [...arr];

  modArray = curBranch === "All" ? modArray : _.filter(modArray, { branch: curBranch });

  modArray = curFloor === "All" ? modArray : _.filter(modArray, (shop) => shop.floor.floorNum === curFloor);

  if (curSize !== "All") {
    if (curSize === "Above") {
      modArray = _.filter(modArray, (shop) => shop.size > 2000);
    } else {
      modArray = _.filter(modArray, (shop) => shop.size <= curSize);
    }
  }

  if (curRent !== "All") {
    if (curRent === "Above") {
      modArray = _.filter(modArray, (shop) => shop.rent.rentNum > 500000);
    } else {
      modArray = _.filter(modArray, (shop) => shop.rent.rentNum <= curRent);
    }
  }

  return modArray;
};

const removeAllDropDowns = (curLabel, curCollapsable) => {
  const labels = document.querySelectorAll(".label");
  const collapsables = document.querySelectorAll(".collapsable");

  labels.forEach((label, index) => {
    if (label === curLabel || curCollapsable === collapsables[index]) return;
    label.classList.remove("active");
    collapsables[index].classList.remove("show");
  });
};

const removeDropdown = (e) => {
  const labels = document.querySelectorAll(".label");
  const collapsables = document.querySelectorAll(".collapsable");

  if (!e.target.classList.contains("collapsable") && !e.target.closest(".refinement")) {
    labels.forEach((label) => {
      label.classList.remove("active");
    });
    collapsables.forEach((collapsable) => {
      collapsable.classList.remove("show");
    });
  }
};

let curTarget;

const toggleDropDown = (e) => {
  if (!e.target.classList.contains("refinement")) return;

  const curLabel = e.target.querySelector(".label");
  const curCollapsable = e.target.querySelector(".collapsable");
  curLabel.classList.toggle("active");
  curCollapsable.classList.toggle("show");
  removeAllDropDowns(curLabel, curCollapsable);
};

const toggleActiveClass = (arr, e) => {
  arr.forEach((chip) => {
    chip.classList.remove("active");
  });
  if (!e) return;
  e.target.classList.add("active");
};

const toggleFilters = (e) => {
  const filterType = e.target.getAttribute("filter-type");
  const filterValue = e.target.getAttribute("filter-value");
  const filterChipBranch = document.querySelectorAll(".filter-chip.branch");
  const filterChipFloor = document.querySelectorAll(".filter-chip.floor");
  const filterChipSize = document.querySelectorAll(".filter-chip.size");
  const filterChipRent = document.querySelectorAll(".filter-chip.rent");

  const shouldNotEvaluate = filterValue === "All" || filterValue === "Above";

  switch (filterType) {
    case "Branch":
      toggleActiveClass(filterChipBranch, e);
      const branchLabel = document.querySelector(".label-branch");
      curBranch = filterValue;
      branchLabel.textContent = `Branch (${curBranch})`;
      break;
    case "Floor":
      toggleActiveClass(filterChipFloor, e);
      const floorLabel = document.querySelector(".label-floor");
      curFloor = !shouldNotEvaluate ? parseInt(filterValue) : filterValue;
      floorLabel.textContent = `Floor (${curFloor})`;

      break;
    case "Size":
      toggleActiveClass(filterChipSize, e);
      const sizeLabel = document.querySelector(".label-size");
      curSize = !shouldNotEvaluate ? parseInt(filterValue) : filterValue;
      sizeLabel.textContent = `Size (${curSize === "Above" ? "2000+" : curSize})`;
      break;

    case "Rent":
      toggleActiveClass(filterChipRent, e);
      const rentLabel = document.querySelector(".label-rent");
      curRent = !shouldNotEvaluate ? parseInt(filterValue) : filterValue;
      rentLabel.textContent = `Rent (${curRent === "Above" ? "500, 000+" : curRent})`;
      break;

    default:
      break;
  }

  const filteredArray = applyAllFilters(availableShops);
  setUpStore(filteredArray);
};

const mountSplide = () => {
  // Check if Splide instance already exists
  if (window.splide) {
    window.splide.destroy();
  }

  // Create a new Splide instance
  window.splide = new Splide(`#main-carousel`, {
    // autoplay: true,
    perPage: 1,
    lazyLoad: "nearby",
  });

  // Mount the new instance
  window.splide.mount();
};

const showCarousel = (content) => {
  const track = document.querySelector(".splide__list");
  const description = document.querySelector(".extra-content .description");

  description.innerHTML = `
  <h1 >${content.branch}</h1>
  <h5 >Floor: ${content.floor.floorText}</h5>
  <h5 >Size:  ${content.size} sq.ft</h5>          
  `;

  while (track.firstChild) {
    track.removeChild(track.firstChild);
  }
  content.imgArr.forEach((path) => {
    const imgTag = document.createElement("img");
    imgTag.src = `${path}`;
    imgTag.loading = "lazy";
    imgTag.className = "splide__slide";
    track.append(imgTag);
  });

  mountSplide();
};

const toggleSplide = (content) => {
  document.querySelector(".bounding-box").classList.toggle("show");
  if (!content) return;
  showCarousel(content);
};

const setUpStore = (arr) => {
  const noContentContainer = document.querySelector(".no-content");
  const special = document.querySelector(".special");
  const regular = document.querySelector(".regular");

  if (arr.length > 0) {
    noContentContainer.classList.add("hidden");
  } else {
    noContentContainer.classList.remove("hidden");
    if (curBranch === "OSA Karen road") {
      special.classList.remove("hidden");
      regular.classList.add("hidden");
    } else {
      special.classList.add("hidden");
      regular.classList.remove("hidden");
    }
  }
  const filteredContentContainer = document.querySelector(".filtered-content");

  while (filteredContentContainer.firstChild) {
    filteredContentContainer.removeChild(filteredContentContainer.firstChild);
  }

  arr.forEach((item) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "filtered-card";

    const cardInnerHtml = `
            <div class="filtered-card-inner">
                <div class="fc-top">
                    <img src="${item.imgPath}" loading="lazy">
                    <div class="btn-container">
                        <button>View</button>
                    </div>
                </div>
                <div class="fc-bottom">
                  <span>${item.branch}</span>
                  <span>Floor: ${item.floor.floorText}</span>
                  <span>Size: ${item.size} sq.ft</span>
                </div>
            </div>`;

    parentDiv.innerHTML = cardInnerHtml;

    parentDiv.onclick = () => {
      toggleSplide(item);
    };

    filteredContentContainer.append(parentDiv);
  });
};

const clearFilters = () => {
  curBranch = "All";
  curFloor = "All";
  curSize = "All";

  const branchLabel = document.querySelector(".label-branch");
  const floorLabel = document.querySelector(".label-floor");
  const sizeLabel = document.querySelector(".label-size");

  const filterChipBranch = document.querySelectorAll(".filter-chip.branch");
  const filterChipFloor = document.querySelectorAll(".filter-chip.floor");
  const filterChipSize = document.querySelectorAll(".filter-chip.size");
  const filterChipRent = document.querySelectorAll(".filter-chip.rent");

  branchLabel.textContent = `Branch`;
  floorLabel.textContent = `Floor`;
  sizeLabel.textContent = `Size`;

  const arr = [...filterChipBranch, ...filterChipFloor, ...filterChipSize, ...filterChipRent];

  toggleActiveClass(arr, null);

  setUpStore(availableShops);
};

const adjustCarouselWidthHeight = () => {
  const mainCarousel = document.querySelector("#main-carousel");
  const mainWidth = mainCarousel.getBoundingClientRect().width;
  const aspecRatio = 720 / 540;
  const height = (1 / aspecRatio) * mainWidth;
  mainCarousel.style.height = `${height}px`;
};

const addNavEventlisteners = () => {
  const refinementBtns = document.querySelectorAll(".refinement");
  const filterChips = document.querySelectorAll(".filter-chip");

  refinementBtns.forEach((refinement) => {
    refinement.addEventListener("click", toggleDropDown);
  });

  filterChips.forEach((chip) => {
    chip.addEventListener("click", toggleFilters);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addNavEventlisteners();
  adjustCarouselWidthHeight();

  setUpStore(availableShops);
});

document.addEventListener("click", removeDropdown);

window.addEventListener("resize", adjustCarouselWidthHeight);

const toggleFilterBar = () => {
  const breadcrumbNav = document.querySelector(".breadcrumb-nav");
  const text = document.querySelector(".toggle-text");

  breadcrumbNav.classList.toggle("show");
  document.querySelector(".see-filters").classList.toggle("active");

  if (breadcrumbNav.classList.contains("show")) {
    text.textContent = "Hide Filters";
  } else {
    text.textContent = "Show Filters";
  }
};
