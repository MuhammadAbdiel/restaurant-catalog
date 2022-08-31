import Swal from "sweetalert2";
import CONFIG from '../data/config';

class RestaurantDetail extends HTMLElement {
  set restaurantItem(item) {
    this.restaurant = item.restaurant;
    this.render();
  }

  _getCategories() {
    let categories = '';
    this.restaurant.categories.forEach((item) => {
      categories += `${item.name}, `;
    });
    return categories;
  }

  _getFoods() {
    let foods = '<b>Food List</b><div class="menu">';
    this.restaurant.menus.foods.forEach((food) => {
      foods += `<li>${food.name}</li>`;
    });
    foods += '</div>';

    return foods;
  }

  _getDrinks() {
    let drinks = '<b>Drink List</b><div class="menu">';
    this.restaurant.menus.drinks.forEach((drink) => {
      drinks += `<li>${drink.name}</li>`;
    });
    drinks += '</div>';

    return drinks;
  }

  _getReviews() {
    let reviews = '<b>Customer Reviews</b>';
    this.restaurant.customerReviews.forEach((item) => {
      reviews += `<div class="review">
                    <b>${item.name}</b><br>
                    <small>${item.date}</small><br>
                    "<i>${item.review}</i>"
                  </div>`;
    });
    return reviews;
  }

  render() {
    this.innerHTML = `
      <h1>${this.restaurant.name}</h1>
      <img src="${CONFIG.BASE_IMAGE_URL}${this.restaurant.pictureId}" alt="${
      this.restaurant.name
    }">
      <div class="basic-info">
        <p>Categories<br><b><i class="fa-solid fa-utensils"></i>&nbsp; ${this._getCategories().slice(
          0,
          -2
        )}</b></p>
        <p>Address<br><b><i class="fa-solid fa-location-dot"></i>&nbsp; ${
          this.restaurant.address
        }</b></p>
        <p>City<br><b><i class="fa-solid fa-city"></i>&nbsp; ${
          this.restaurant.city
        }</b></p>
        <p>Rating<br><b><i class="fa-solid fa-star"></i>&nbsp; ${
          this.restaurant.rating
        }</b></p>
      </div>
      <p class="detail-desc">${this.restaurant.description}</p>
      ${this._getFoods()}
      ${this._getDrinks()}
      <div class="detail-review">
        ${this._getReviews()}
      </div>
      <div class="form-review">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input name="inputName" type="text" class="form-control" id="inputName">
          </div>
          <div class="mb-3">
            <label for="inputReview" class="form-label">Review</label>
            <input name="inputReview" type="text" class="form-control" id="inputReview">
          </div>
          <button id="submit-review" type="submit" class="btn2">Submit</button>
        </form>
      </div>
    `;
  }

  renderError(message) {
    Swal.fire({
      title: "Something went wrong!",
      text: message,
      icon: "error",
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
