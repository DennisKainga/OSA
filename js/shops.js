const availableShops = [
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 100,
    rent: { rentText: "48,000", rentNum: 48000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 2700,
    rent: { rentText: "70,000", rentNum: 70000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "3rd floor", floorNum: 3 },
    size: 300,
    rent: { rentText: "40,000", rentNum: 40000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 200,
    rent: { rentText: "10,000", rentNum: 10000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 400,
    rent: { rentText: "48,000", rentNum: 48000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "3rd floor", floorNum: 3 },
    size: 100,
    rent: { rentText: "30,000", rentNum: 30000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 350,
    rent: { rentText: "45,000", rentNum: 45000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 100,
    rent: { rentText: "30,000", rentNum: 30000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "3rd floor", floorNum: 3 },
    size: 350,
    rent: { rentText: "15,000", rentNum: 15000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 2000,
    rent: { rentText: "30,000", rentNum: 30000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 600,
    rent: { rentText: "48,000", rentNum: 48000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "3rd floor", floorNum: 3 },
    size: 1200,
    rent: { rentText: "38,000", rentNum: 38000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "2nd floor", floorNum: 2 },
    size: 2500,
    rent: { rentText: "58,000", rentNum: 58000 },
    imgPath: "./img/langata/11.jpg",
  },
  {
    branch: "OSA Karen road",
    floor: { floorText: "1st floor", floorNum: 1 },
    size: 2100,
    rent: { rentText: "42,000", rentNum: 42000 },
    imgPath: "./img/karen/7.jpg",
  },
  {
    branch: "OSA lang'ata road",
    floor: { floorText: "3rd floor", floorNum: 3 },
    size: 2500,
    rent: { rentText: "55,000", rentNum: 55000 },
    imgPath: "./img/langata/11.jpg",
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

const toggleDropDown = (e) => {
  if (!e.target.classList.contains("refinement")) return;
  e.target.querySelector(".label").classList.toggle("active");
  e.target.querySelector(".collapsable").classList.toggle("show");
};

const toggleActiveClass = (arr, e) => {
  arr.forEach((chip) => {
    chip.classList.remove("active");
  });
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

const setUpStore = (arr) => {
  const filteredContentContainer = document.querySelector(".filtered-content");

  while (filteredContentContainer.firstChild) {
    filteredContentContainer.removeChild(filteredContentContainer.firstChild);
  }

  arr.forEach((item) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "filtered-card";
    const innerDiv = document.createElement("div");
    innerDiv.className = "filtered-card-inner";
    const topDiv = document.createElement("div");
    topDiv.className = "fc-top";
    const img = document.createElement("img");
    img.src = item.imgPath;
    topDiv.append(img);
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "fc-bottom";
    const topText = document.createElement("span");
    topText.textContent = `${item.branch}`;
    const middleText = document.createElement("span");
    middleText.textContent = `Floor: ${item.floor.floorText}`;
    const middleTextTwo = document.createElement("span");
    middleTextTwo.textContent = `Size: ${item.size} sq.m`;
    const bottomText = document.createElement("span");
    bottomText.textContent = `Rent: Ksh. ${item.rent.rentText}`;
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    const anchor = document.createElement("a");
    anchor.href = "Contact.html";
    anchor.textContent = "Contact us";

    btnContainer.append(anchor);
    topDiv.append(btnContainer);
    bottomDiv.append(topText);
    bottomDiv.append(middleText);
    bottomDiv.append(middleTextTwo);
    bottomDiv.append(bottomText);
    innerDiv.append(topDiv);
    innerDiv.append(bottomDiv);
    parentDiv.append(innerDiv);

    filteredContentContainer.append(parentDiv);
  });
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

  setUpStore(availableShops);
});

document.addEventListener("click", removeDropdown);
