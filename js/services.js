let curIndex;
const toggleCard = (index) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.classList.remove("active");
    card.querySelector(".more-btn").textContent = `${index === i && curIndex !== index ? "Show Less" : "Show More"}`;
  });

  if (curIndex === index) {
    return;
  }

  cards[index].classList.toggle("active");
  curIndex = index;
};

document.addEventListener("DOMContentLoaded", () => {});
