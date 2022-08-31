import CONFIG from '../data/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a class="resto" href="#/detail/${this.restaurant.id}">
          <section class="box">
            <div class="rating">
              ${
                this.restaurant.rating >= 2.5
                  ? '<i class="fa-solid fa-star"></i>'
                  : '<i class="fa-solid fa-star-half"></i>'
              } ${this.restaurant.rating}
            </div>
            <img src="${CONFIG.BASE_IMAGE_URL}${
      this.restaurant.pictureId
    }" alt="${this.restaurant.name} Image">
            <p class="info">${this.restaurant.city}</p>
            <h3 class="title">${this.restaurant.name}</h3>
            <p class="text-overflow">${this.restaurant.description}</p>
        </section>
      </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
