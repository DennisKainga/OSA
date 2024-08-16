const stores = [
  { name: "Green Grocers", category: "Grocery", logoPath: "./img/gallery-1.jpg" },
  { name: "Tech Haven", category: "Electronics", logoPath: "./img/gallery-2.jpg" },
  { name: "Book Nook", category: "Books", logoPath: "./img/gallery-2.jpg" },
  { name: "Fashion Forward", category: "Clothing", logoPath: "./img/gallery-4.jpg" },
  { name: "Pet Paradise", category: "Pet Supplies", logoPath: "./img/gallery-5.jpg" },
  { name: "Home Essentials", category: "Home Goods", logoPath: "./img/gallery-6.jpg" },
  { name: "Gadget World", category: "Electronics", logoPath: "./img/gallery-7.jpg" },
  { name: "Toy Town", category: "Toys", logoPath: "./img/gallery-8.jpg" },
  { name: "Fitness First", category: "Fitness", logoPath: "./img/gallery-9.jpg" },
  { name: "Beauty Bliss", category: "Beauty", logoPath: "./img/gallery-10.jpg" },
  { name: "Outdoor Outfitters", category: "Outdoor", logoPath: "./img/gallery-11.jpg" },
  { name: "Kitchen Kings", category: "Kitchen", logoPath: "./img/gallery-12.jpg" },
  { name: "Auto Alley", category: "Automotive", logoPath: "./img/destination-1.jpg" },
  { name: "Music Mania", category: "Music", logoPath: "./img/destination-2.jpg" },
  { name: "Artistic Avenue", category: "Art Supplies", logoPath: "./img/destination-3.jpg" },
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
let currentCategory = null;

const storeSetup = (filteredStores) => {
  const storeContainer = document.querySelector(".store-container");

  // Remove all children first
  while (storeContainer.firstChild) {
    storeContainer.removeChild(storeContainer.firstChild);
  }

  // Append new store elements
  filteredStores.forEach((store) => {
    const div = document.createElement("div");
    div.className = "store-card";
    const img = document.createElement("img");
    img.src = store.logoPath;
    div.append(img);
    storeContainer.append(div);
  });
};

const filterStoresByCategory = (filteredByName, category) => {
  if (!category || category === "All") {
    currentCategory = null;
    return filteredByName;
  }
  currentCategory = category;

  const filteredStores = _.filter(filteredByName, { category: category });

  return filteredStores;
};

const filterStoresByName = (index) => {
  currentIndex = index;
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach((chip) => {
    chip.classList.remove("active");
  });
  filterChips[index].classList.add("active");

  const filteredStores = _.filter(stores, (store) => {
    return batches[index].includes(store.name[0].toLowerCase());
  });

  return filteredStores;
};

const filterStores = (index, category) => {
  const currentFilterIndicator = document.querySelector(".current-filter");
  index = index === null ? currentIndex : index;
  category = category === null ? currentCategory : category;
  currentFilterIndicator.textContent = `${category ?? "FILTER BY CATEGORY"}`;
  const filteredByName = filterStoresByName(index);
  const filteredByCategory = filterStoresByCategory(filteredByName, category);

  storeSetup(filteredByCategory);
};

const removeFilterDropdown = (e) => {
  const filterButton = document.querySelector(".filter-button");
  const filterItemsContainer = document.querySelector(".filter-items");

  if (!e.target.classList.contains("filter-button") && !e.target.closest(".filter-items")) {
    filterItemsContainer.classList.remove("show");
    filterButton.classList.remove("flip");
  }
};

const setUpPageEventListeners = () => {
  const filterChips = document.querySelectorAll(".filter-chip");
  const filterItems = document.querySelectorAll(".filter-item");
  const filterButton = document.querySelector(".filter-button");

  filterChips.forEach((chip, index) => {
    chip.addEventListener("click", () => {
      filterStores(index, null);
    });
  });

  filterItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      filterStores(null, item.textContent);
    });
  });

  filterButton.addEventListener("click", () => {
    const filterItemsContainer = document.querySelector(".filter-items");
    filterItemsContainer.classList.toggle("show");
    filterButton.classList.toggle("flip");
  });

  document.addEventListener("click", removeFilterDropdown);
};

document.addEventListener("DOMContentLoaded", () => {
  storeSetup(stores);
  setUpPageEventListeners();
});
