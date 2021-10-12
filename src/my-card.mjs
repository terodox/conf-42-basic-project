class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
         :host {
           display: block;
         }
         section {
           border: 1px solid #CCC;
           border-radius: 5px;
           max-width: 350px;
           box-shadow:
             0px 2px 1px -1px rgba(0, 0, 0, 0.2),
             0px 1px 1px 0px rgba(0, 0, 0, 0.14),
             0px 1px 3px 0px rgba(0, 0, 0, 0.12);
         }
         h2 {
           background-color: #EEE;
           margin: 0;
           padding: 8px;
           border-top-left-radius: 5px;
           border-top-right-radius: 5px;
         }
         figcaption {
           font-style: italic;
         }
      </style>
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