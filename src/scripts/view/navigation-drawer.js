const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");

  if (drawerElement.classList.contains("open")) {
    hamburgerButtonElement.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    hamburgerButtonElement.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }

  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});
