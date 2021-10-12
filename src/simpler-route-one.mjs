import './my-card.mjs';

class SimpleRouteOne extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <my-card>
            <span slot="title">This is the card title</span>
            <img slot="image" src="https://avatars.githubusercontent.com/u/740088?s=280&v=4">
            <span slot="caption">Meltwater Logo</span>
        </my-card>
      `;
    }
}

customElements.define('simple-route-one', SimpleRouteOne);