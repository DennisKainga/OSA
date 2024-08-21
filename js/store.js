const stores = [
  { name: "Naivas", category: "Grocery", logoPath: "./img/Stores/naivas-logo.png", link: "https://naivas.online/", branch: "OSA Langata" },
  { name: "Optica", category: "Health", logoPath: "./img/Stores/Optica.webp", link: "https://optica.africa/", branch: "OSA Karen" },
  { name: "Book Nook", category: "Books", logoPath: "./img/gallery-2.jpg", link: "https://naivas.online/", branch: "OSA Langata" },
  {
    name: "Scottsdale",
    category: "Food",
    logoPath: "./img/Stores/Scottsdale.png",
    link: "https://www.instagram.com/scottsdale_karen/",
    branch: "OSA Langata",
  },
  { name: "Pet Paradise", category: "Pet Supplies", logoPath: "./img/gallery-5.jpg", link: "https://naivas.online/", branch: "OSA Langata" },
  {
    name: "Zokai",
    category: "Home Goods",
    logoPath: "./img/Stores/Zokai.png",
    link: "https://zokaistore.com/?srsltid=AfmBOoosDxqsawISFHp-d8UIFWW6GOJDGeoN5u7rsNWSgzCBbQHQ_iFn",
    branch: "OSA Karen",
  },
  {
    name: "Green Grocers",
    category: "Grocery",
    logoPath: "./img/Stores/Jambo green.jpg",
    link: "https://jambofreshgreengrocers.com/",
    branch: "OSA Langata",
  },
  { name: "Toy Town", category: "Toys", logoPath: "./img/gallery-8.jpg", link: "https://naivas.online/", branch: "OSA Langata" },
  { name: "Fitness First", category: "Fitness", logoPath: "./img/gallery-9.jpg", link: "https://naivas.online/", branch: "OSA Karen" },
  { name: "Blckwood", category: "Drinks", logoPath: "./img/Stores/blackwood.png", link: "https://naivas.online/", branch: "OSA Langata" },
  { name: "Outdoor Outfitters", category: "Outdoor", logoPath: "./img/gallery-11.jpg", link: "https://naivas.online/", branch: "OSA Karen" },
  { name: "Kitchen Kings", category: "Kitchen", logoPath: "./img/gallery-12.jpg", link: "https://naivas.online/", branch: "OSA Langata" },
  { name: "Auto Alley", category: "Automotive", logoPath: "./img/destination-1.jpg", link: "https://naivas.online/", branch: "OSA Karen" },
  { name: "Music Mania", category: "Music", logoPath: "./img/destination-2.jpg", link: "https://naivas.online/", branch: "OSA Langata" },
  { name: "Artistic Avenue", category: "Art Supplies", logoPath: "./img/destination-3.jpg", link: "https://naivas.online/", branch: "OSA Karen" },
];

const batches = [
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
  ["q", "r", "s", "t"],
  ["u", "v", "w", "x"],
  ["y", "z"],
];

let currentIndex = 0;
let currentCategory = "All";
let currrentBranch = "All";

const storeSetup = (filteredStores) => {
  const storeContainer = document.querySelector(".store-container");

  // Remove all children first
  while (storeContainer.firstChild) {
    storeContainer.removeChild(storeContainer.firstChild);
  }

  // Append new store elements
  filteredStores.forEach((store) => {
    const parentDiv = document.createElement("a");
    parentDiv.href = `${store.link}`;
    parentDiv.target = "_blank";
    parentDiv.className = "store-card";
    const html = `
    <div class='belt'><span>${store.name}</span></div>
    <img src='${store.logoPath}'/>
      <div class="store-card__content ">
        <span class='store-card__title'><b>name:</b> ${store.name}</span>
        <span class='store-card__description'><b>branch:</b> ${store.branch}</span>
        <span class='store-card__description'><b>categroy:</b> ${store.category}</span>
      </div>`;

    parentDiv.innerHTML = html;

    storeContainer.append(parentDiv);
  });
};

const filterEverything = (stores) => {
  let modStores = [...stores];

  modStores = currrentBranch === "All" ? modStores : _.filter(modStores, { link: "https://naivas.online/", branch: currrentBranch });

  modStores = currentCategory === "All" ? modStores : _.filter(modStores, { category: currentCategory });

  modStores = _.filter(modStores, (store) => {
    return batches[currentIndex].includes(store.name[0].toLowerCase());
  });
  // console.log({ currentIndex, currrentBranch, currentCategory });
  return modStores;
};

const chipsPressed = (e) => {
  const filterChips = document.querySelectorAll(".filter-chip");

  filterChips.forEach((chip) => {
    if (e.target === chip) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
};

const filterStores = (e) => {
  const btn = e.target;
  const type = btn.getAttribute("filter-type");

  switch (type) {
    case "branch":
      const currentFilterLoc = document.querySelector(".current-filter.location");
      const branch = btn.textContent;
      currentFilterLoc.textContent = `${branch ?? "FILTER BY CATEGORY"}`;
      currrentBranch = branch;
      break;

    case "name":
      chipsPressed(e);
      const index = btn.getAttribute("data-index");
      currentIndex = index;
      break;

    case "category":
      const category = btn.textContent;
      const currentFilterCat = document.querySelector(".current-filter.category");
      currentFilterCat.textContent = `${category ?? "FILTER BY CATEGORY"}`;
      currentCategory = category;
      break;

    default:
      break;
  }

  const filteredStores = filterEverything(stores);

  storeSetup(filteredStores);
};

const removeBothDropdowns = () => {
  const filterButtons = document.querySelectorAll(".filter-button");
  const filterItemsContainers = document.querySelectorAll(".filter-items");
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("flip");
  });
  filterItemsContainers.forEach((filterItemsContainer) => {
    filterItemsContainer.classList.remove("show");
  });
};

let indexTracker;

const removeFilterDropdown = (e) => {
  if (!e.target.classList.contains("filter-button") && !e.target.closest(".filter-items")) {
    indexTracker = null;
    removeBothDropdowns();
  }
};

const filterButtonPressed = (e) => {
  const button = e.target;
  const curIndex = button.getAttribute("data-index");
  const filterButtons = document.querySelectorAll(".filter-button");
  const filterItemsContainers = document.querySelectorAll(".filter-items");

  if (indexTracker === curIndex) {
    removeBothDropdowns();
    indexTracker = null;
    return;
  }

  filterButtons.forEach((btn) => {
    const btnIndex = btn.getAttribute("data-index");
    if (btnIndex === curIndex) {
      btn.classList.add("flip");
    } else {
      btn.classList.remove("flip");
    }
  });

  filterItemsContainers.forEach((container) => {
    const containerIndex = container.getAttribute("data-index");
    if (containerIndex === curIndex) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
  indexTracker = curIndex;
};

const setUpPageEventListeners = () => {
  const filterChips = document.querySelectorAll(".filter-chip");
  const filterItems = document.querySelectorAll(".filter-item");
  const filterButtons = document.querySelectorAll(".filter-button");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", (e) => {
      filterStores(e);
    });
  });

  filterItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      filterStores(e);
    });
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", filterButtonPressed);
  });
  document.addEventListener("click", removeFilterDropdown);
};

document.addEventListener("DOMContentLoaded", () => {
  storeSetup(stores);
  setUpPageEventListeners();
});
