class SimpleRouteTwo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <h1>YAY FOR A SECOND ROUTE!</h1>
      `;
    }
}

customElements.define('simple-route-two', SimpleRouteTwo);