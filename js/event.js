const eventsArray = [
  {
    type: "style",
    eventUrl: "img/destination-2.jpg",
    title: "Trend setting",
    description: "A runway show featuring the latest fashion trends from mall retailers.",
    date: "02-11-2024",
  },
  {
    type: "Feast",
    eventUrl: "img/destination-1.jpg",
    title: "Eat your fill",
    description: "Pop-up food stalls and live cooking demos showcasing diverse cuisines.",
    date: "02-11-2024",
  },
  {
    type: "Some Fun",
    eventUrl: "img/destination-3.jpg",
    title: "Trend setting",
    description: "Fun family activities like crafts, games, and meet-and-greets with mascots.",
    date: "02-11-2024",
  },
  {
    type: "Showcase",
    eventUrl: "img/destination-4.jpg",
    title: "Art Walk",
    description: "A gallery-style exhibition featuring local artists’ works displayed throughout the mall.",
    date: "02-11-2024",
  },
  {
    type: "Fashion",
    eventUrl: "img/destination-5.jpg",
    title: "Trend setting",
    description: "A runway show featuring the latest fashion trends from mall retailers.",
    date: "02-11-2024",
  },
  {
    type: "Spotlight",
    eventUrl: "img/destination-6.jpg",
    title: "Pop-Up Market",
    description: "Temporary booths offering unique, handcrafted items, jewelry, and boutique-style products.",
    date: "02-11-2024",
  },
];

const createNodes = () => {
  const pillsContainer = document.querySelector(".events-row");
  const container = document.querySelector(".events-cards");

  eventsArray.forEach((event) => {
    const pill = document.createElement("div");
    const cardParentDiv = document.createElement("div");
    cardParentDiv.className = "event-card";
    pill.className = "promo";
    const cardHtml = `
            <img src="${event.eventUrl}" alt="">
            <div class="card-text">
                <p>${event.date}</p>
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        `;
    cardParentDiv.innerHTML = cardHtml;
    pill.textContent = `${event.type}`;
    container.append(cardParentDiv);
    pillsContainer.append(pill);
  });
};

const adjustWidth = () => {
  const containerWidth = document.querySelector(".events-cards").getBoundingClientRect().width;
  const idealWidth = 280;

  const maxNum = Math.floor(containerWidth / idealWidth);

  const gapWidth = (maxNum - 1) * 20;

  const availableWidth = containerWidth - gapWidth;

  const cardWidth = Math.floor(availableWidth / maxNum);

  document.documentElement.style.setProperty("--card-width", `${cardWidth}px`);

  console.log(cardWidth);
};

document.addEventListener("DOMContentLoaded", () => {
  adjustWidth();
  createNodes();
  window.addEventListener("resize", adjustWidth);
});
