const stores = [
  {
    name: "Naivas",
    contact: "0111184200",
    category: "Shopping",
    logoPath: "./img/Stores/naivas-logo.png",
    link: "https://naivas.online/",
    branch: "OSA Langata",
  },
  {
    name: "Optica",
    contact: "0115790547",
    category: "Health",
    logoPath: "./img/Stores/Optica.png",
    link: "https://optica.africa/",
    branch: "OSA Langata",
  },
  {
    name: "Karen Kitchen",
    contact: "0793875239",
    category: "Restaurant",
    logoPath: "./img/Stores/karen-kitchen.jfif",
    link: "https://web.facebook.com/KarenkitchenOSA/?_rdc=1&_rdr",
    branch: "OSA Karen",
  },
  {
    name: "Scottsdale",
    contact: "N/A",
    category: "Bar & Restaurant",
    logoPath: "./img/Stores/Scottsdale.png",
    link: "https://www.instagram.com/scottsdale_karen/",
    branch: "OSA Langata",
  },
  {
    name: "4G Capital",
    contact: "0758693269",
    category: "Financial Services",
    logoPath: "./img/Stores/4G-cap.png",
    link: "https://www.4g-capital.com/",
    branch: "OSA Karen",
  },
  {
    name: "Zokai",
    contact: "0700533156",
    category: "Home Goods",
    logoPath: "./img/Stores/Zokai.png",
    link: "https://zokaistore.com/?srsltid=AfmBOoosDxqsawISFHp-d8UIFWW6GOJDGeoN5u7rsNWSgzCBbQHQ_iFn",
    branch: "OSA Langata",
  },
  {
    name: "Green Grocers",
    contact: "0793366998",
    category: "Grocery",
    logoPath: "./img/Stores/Jambo green.jpg",
    link: "https://jambofreshgreengrocers.com/",
    branch: "OSA Langata",
  },
  {
    name: "Beauty International",
    contact: "0745978826",
    category: "Beauty & Salon",
    logoPath: "./img/Stores/Beautiful-intl.png",
    link: "https://www.instagram.com/beautyinternationalke",
    branch: "OSA Karen",
  },
  {
    name: "Jibu Water",
    contact: "070408151",
    category: "Clean water",
    logoPath: "./img/Stores/Jibu.jpg",
    link: "https://jibuco.com/ke/",
    branch: "OSA Karen",
  },
  {
    name: "Blackwood",
    contact: "N/A",
    category: "Bar & Restaurant",
    logoPath: "./img/Stores/blackwood.png",
    link: "https://www.tiktok.com/discover/blackwood-restaurant-nairobi",
    branch: "OSA Langata",
  },
  {
    name: "Victoria Beauty Clinic",
    contact: "0706202450",
    category: "Beauty & Salon",
    logoPath: "./img/Stores/VictoriaBC.jpg",
    link: "https://www.victoriabeautyacademy.co/",
    branch: "OSA Karen",
  },
  {
    name: "Ankara by Mwara",
    contact: "0759285830",
    category: "Clothing",
    logoPath: "./img/Stores/Ankara.jpg",
    link: "https://web.facebook.com/p/ankara_by_mwara-100063895971972/?_rdc=1&_rdr",
    branch: "OSA Karen",
  },
  {
    name: "Sno Cream",
    contact: "N/A",
    category: "Restaurant",
    logoPath: "./img/Stores/Sno_cream.jpg",
    link: "https://nairobieats.co.ke/reviews/sno-cream/",
    branch: "OSA Karen",
  },
  {
    name: "Hongkong Kitchen",
    contact: "0794 584063",
    category: "Restaurant",
    logoPath: "./img/Stores/Hongkong.png",
    link: "https://web.facebook.com/hongkongkitchenadamsarcade/?_rdc=1&_rdr",
    branch: "OSA Karen",
  },
  {
    name: "Smart Homes",
    contact: "",
    category: "Electronics",
    logoPath: "./img/Stores/smarthome.jpg",
    link: "https://web.facebook.com/homeautomationke/?locale=pl_PL&_rdc=1&_rdr",
    branch: "OSA Karen",
  },
  {
    name: "Hair Revolution",
    contact: "0722 660 573",
    category: "Male Grooming",
    logoPath: "./img/Stores/Hairrev.jpg",
    link: "https://www.instagram.com/hairrev_ke/",
    branch: "OSA Karen",
  },
  {
    name: "Thirsty Oak",
    contact: "0798 888938",
    category: "Bar",
    logoPath: "./img/Stores/thirstyoak.jpg",
    link: "https://web.facebook.com/thirstyoakke/?_rdc=1&_rdr",
    branch: "OSA Karen",
  },
  {
    name: "Pharmaplus",
    contact: "0741352835",
    category: "Health",
    logoPath: "./img/Stores/pharmaplus.png",
    link: "https://www.pharmapluspharmacies.co.ke/",
    branch: "OSA Langata",
  },
  {
    name: "Greenit Decors",
    contact: "0796035000",
    category: "Grocery",
    logoPath: "./img/Stores/greenit-decors.jpg",
    link: "https://greenitdecors.co.ke/about-greenit-decors/",
    branch: "OSA Langata",
  },
  {
    name: "Micos drycleaners",
    contact: "0757253121",
    category: "Dry Cleaning",
    logoPath: "./img/Stores/Micos-dry-cleaners.png",
    link: "https://micosdrycleaning.com/",
    branch: "OSA Langata",
  },
  {
    name: "Infinite Touch",
    contact: "0724220022",
    category: "Male Grooming",
    logoPath: "./img/Stores/Infinitetouch.png",
    link: "https://www.tiktok.com/@infinitetouch.ke",
    branch: "OSA Langata",
  },
  {
    name: "African Elite wear",
    contact: "0114445017",
    category: "Clothing",
    logoPath: "./img/Stores/African-elite.png",
    link: "https://www.instagram.com/p/C9CNqUMAyHj/",
    branch: "OSA Langata",
  },
  {
    name: "Jaslink",
    contact: "0708999328",
    category: "Bar",
    logoPath: "./img/Stores/Jasliquor.png",
    link: "https://www.instagram.com/jaslink_liquor_store_/?locale=zh_CN",
    branch: "OSA Langata",
  },
  {
    name: "Umoja Shoe Company",
    contact: "0714197894",
    category: "Shoes",
    logoPath: "./img/Stores/umojawebsite.png",
    link: "https://umoja.africa/",
    branch: "OSA Langata",
  },
];

const batches = [
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ],
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
let currentFuzzy = "";

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
    <img src='${store.logoPath}' loading="lazy"/>
      <div class="store-card__content ">
        <span class='store-card__title'><b>name:</b> ${store.name}</span>
        <span class='store-card__description'><b>branch:</b> ${store.branch}</span>
        <span class='store-card__description'><b>contact:</b> ${store.contact}</span>
      </div>`;

    parentDiv.innerHTML = html;

    storeContainer.append(parentDiv);
  });
};

const filterEverything = (stores) => {
  let modStores = [...stores];

  console.log(currentFuzzy);
  modStores =
    currentFuzzy === ""
      ? modStores
      : _.filter(modStores, function (store) {
          return store.name.toLowerCase().includes(currentFuzzy.toLowerCase().trim());
        });

  // Filter modStores based on branch
  modStores =
    currrentBranch === "All"
      ? modStores
      : _.filter(modStores, function (store) {
          return store.branch.toLowerCase() === currrentBranch.toLowerCase();
        });
  console.log(modStores);

  // Filter modStores based on category
  modStores =
    currentCategory === "All"
      ? modStores
      : _.filter(modStores, function (store) {
          return store.category.toLowerCase() === currentCategory.toLowerCase();
        });

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

const handleChange = (e) => {
  currentFuzzy = e.target.value;
  const filteredStores = filterEverything(stores);
  storeSetup(filteredStores);
};

const setUpPageEventListeners = () => {
  const input = document.querySelector(".input-filter");
  const filterChips = document.querySelectorAll(".filter-chip");
  const filterItems = document.querySelectorAll(".filter-item");
  const filterButtons = document.querySelectorAll(".filter-button");

  input.addEventListener("input", handleChange);

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
