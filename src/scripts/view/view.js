import data from "../../DATA.json";

const main = () => {
  let restaurantElement = "";

  data.restaurants.forEach((resto) => {
    restaurantElement += `
      <a class="resto" href="#">
          <section class="box">
            <div class="rating">
              ${
                resto.rating >= 2.5
                  ? '<i class="fa-solid fa-star"></i>'
                  : '<i class="fa-solid fa-star-half"></i>'
              } ${resto.rating}
            </div>
            <img src="${resto.pictureId}" alt="${resto.name} Image">
            <p class="info">${resto.city}</p>
            <h3 class="title">${resto.name}</h3>
            <p class="text-overflow">${resto.description}</p>
        </section>
      </a>
    `;
  });

  document.querySelector(".wrapper").innerHTML = restaurantElement;
  document.querySelector(".jumbotron").style.backgroundImage =
    "url('./images/heros/hero-image_4.jpg')";
};

export default main;
