let curIndex;
const toggleCard = (index) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.classList.remove("active");
    card.querySelector(".more-btn").textContent = `Show More`;
  });

  if (curIndex === index) {
    curIndex = null;
    return;
  }

  cards[index].classList.toggle("active");
  cards[index].querySelector(".more-btn").textContent = "Show Less";
  curIndex = index;
};

document.addEventListener("DOMContentLoaded", () => {});
