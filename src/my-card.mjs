import styles from './my-card.scss';
class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <section>
        <h2><slot name="title"></slot></h2>
        <figure>
          <slot name="image"></slot>
          <figcaption>
            <slot name="caption">
          </figcaption>
        </figure>
      </section>
      `;
    }
}

customElements.define('my-card', MyCard);