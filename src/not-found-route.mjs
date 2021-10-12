class NotFoundRoute extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <h1>Ruh roh raggy! The page you're looking for is not here!</h1>
      `;
    }
}

customElements.define('not-found-route', NotFoundRoute);