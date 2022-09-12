class TabLayout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchBox').value;
  }

  render() {
    this.innerHTML = `
      <a href="../#content" class="skip-link">Skip to Content</a>
        <div class="app-bar__menu">
          <button id="hamburger" type="button"><i class="fa-solid fa-bars"></i></button>
        </div>
        <nav id="drawer">
            <a href="index.html" class="drawer-title">RESTFood</a>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://github.com/MuhammadAbdiel" target="_blank" rel="noopener">About Us</a></li>
            </ul>
        </nav>
      <a href="index.html" class="main-title">RESTFood</a>
    `;
  }
}

customElements.define('app-bar', TabLayout);
