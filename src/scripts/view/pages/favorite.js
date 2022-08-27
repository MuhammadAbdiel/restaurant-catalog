/* eslint-disable eqeqeq */
import Swal from "sweetalert2";
import LocalData from "../../data/local-data";
import "../../component/restaurant-list";

class Favorite {
  static async render() {
    return `<h1>Your Favorite Restaurant</h1>
        <restaurant-list class="wrapper" id="content"></restaurant-list>`;
  }

  static async afterRender() {
    const restaurantListElement = document.querySelector("restaurant-list");
    const favoriteData = await LocalData.getAllSaved();

    if (favoriteData.length == 0) {
      Swal.fire({
        title: "No Data?",
        text: "There are no favorite restaurants yet!",
        icon: "warning",
      });
    }

    restaurantListElement.restaurants = favoriteData;
  }
}

export default Favorite;
