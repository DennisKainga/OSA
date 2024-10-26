const arcadeObj = [
  {
    index: 0,
    name: "One Stop Arcade Langata",
    description: `Completed in July 2023, One Stop Arcade - Langata Road is a bustling three-story, 50,000 sf convenience mall located on a busy artery also within the Karen area of Nairobi. This vibrant shopping destination is known for its diverse array of stores with services and products catering to the needs of both locals and visitors.
                Situated strategically at the Corner of Langata Road and Langata Road South, the property enjoys a prime location with ease of access for all shoppers within the Karen-Langata catchment area and in transit customers from areas as far as Ngong and Rongai. It is a three-floor development with an impressive selection of retail outlets, restaurants, and essential services, making it a one-stop destination for shopping, dining, and leisure.

                One Stop Arcade Langata Road boasts Navias Supermarket as its anchor tenant, further solidifying its position as a premier shopping destination in Karen, Nairobi. As a well-established supermarket chain known for its wide selection of groceries, fresh produce, household goods, and more. Naivas draws in a steady flow of shoppers seeking convenience and quality. Its presence enhances the overall appeal of the mall, offering visitors a comprehensive shopping experience under one roof. Whether patrons are stocking up on essentials or exploring other offerings within the mall, Naivas Supermarket serves as a key attraction, contributing to the vibrant atmosphere and success of One Stop Arcade Langata Road.

                With over 80% occupancy, One Stop Arcade Langata Road buzzes with activity, drawing in crowds with its mix of well-known brands and local businesses. From fashion boutiques and electronics stores to grocery shops and beauty salons, the mall offers a comprehensive shopping experience tailored to diverse tastes and preferences.

                Whether you're in need of everyday essentials, searching for the latest fashion trends, or simply looking to unwind over a delicious meal, One Stop Arcade Langata Road provides a welcoming and convenient environment for all. Its lively atmosphere, coupled with a commitment to customer satisfaction, makes it a beloved hub in the heart of Karen, Nairobi.`,
    completed: "July 2023",
  },
  {
    index: 1,
    name: "One Stop Arcade Karen",
    description: `Completed in early 2019, One Stop Arcade - Karen Road stands as a testament to our pioneering spirit, being our very first development and a cornerstone of a convenience shopping Centre in the tranquil neighborhood of Karen, Nairobi. Located on Karen Road, opposite the Vice President’s Official Residence, this charming, 15,000sf two-story convenience shopping Centre embodies the essence of accessibility and community, offering a diverse range of retailers to cater to the varied needs of its visitors.

                  Nestled amidst lush surroundings, One Stop Arcade - Karen Road is a hub of activity, with its carefully curated selection of stores adding vibrancy to the local landscape. From the tantalizing aromas wafting from its restaurant to the latest fashion trends on display in its fashion store, the mall invites visitors to explore and indulge in a delightful shopping experience.

                  Currently at full occupancy, the mall thrives as a bustling community hub, where locals and visitors come together to shop, dine, and unwind. Its success is a testament to its appeal and the strong sense of community it fosters, making it a beloved fixture in the heart of Karen, Nairobi.
                  `,
    completed: "early 2019",
  },
  {
    index: 2,
    name: "One Stop Arcade Nyari (An arist's )",
    description: `We are also pleased to announce our next upcoming project, which will be more ambitious in scale and offerings. One Stop Arcade – Rosslyn is currently undergoing developmental approvals and we hope to break ground in June 2024 with an expected opening Date of July 1st 2025. This property will be a shopping center that outshines its counterparts, setting a new standard in convenience and variety. With its larger size and comprehensive offerings, One Stop Arcade Rosslyn is poised to become the ultimate destination for shoppers seeking convenience, variety, and entertainment experiences all in one place.`,
    completed: "Hopefuly by July 1st 2025",
  },
];

let curIndex;
const handleDropdowns = (index) => {
  const dropdowns = document.querySelectorAll(".type");

  if (curIndex === index) {
    dropdowns[index].classList.remove("show");
    dropdowns[index].querySelector(
      "button"
    ).innerHTML = `READ MORE <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    curIndex = null;
    return;
  }
  dropdowns.forEach((el, i) => {
    if (i === index) {
      el.classList.add("show");
      el.querySelector(
        "button"
      ).innerHTML = `SHOW LESS <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    } else {
      el.classList.remove("show");
      el.querySelector(
        "button"
      ).innerHTML = `READ MORE <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`;
    }
  });

  curIndex = index;
};

const splideSetUp = () => {
  var splide = new Splide("#primary", {
    type: "slide",
    perPage: 1,
    focus: 0,
  });

  splide.mount();

  var splide2 = new Splide("#secondary", {
    type: "fade",
    rewind: true,
    autoplay: true,
  });

  splide2.on("moved", (newIndex) => {
    const mallTitles = document.querySelectorAll(".mt");

    mallTitles.forEach((el, i) => {
      if (i === newIndex) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  });

  splide2.mount();
};

document.addEventListener("DOMContentLoaded", () => {
  splideSetUp();
});
