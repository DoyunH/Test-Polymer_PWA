import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class CardElement extends PolymerElement {
  constructor() {
    super();

    this.data = {
      title: "Mi primer componente",
      explanation: "",
      url: "",
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          display: block;
        }
        .card {
          padding: 40px 20px;
          display: flex;
          flex-direction: row;
          align-items: start;
        }
        .col1 {
          width: 40%;
          padding: 1%;
        }
        .col2 {
          width: 60%;
          padding: 1%;
        }
        img {
          width: 100%;
        }
        @media only screen and (max-width: 500px) {
          .card {
            flex-direction: column;
          }
          .col1 {
            width: 100%;
            padding: 2%;
          }
          .col2 {
            width: 100%;
            padding: 2%;
          }
        }
      </style>
      <div class="card">
        <div class="col1">
          <h1>[[data.title]]</h1>
          <p>[[data.explanation]]</p>
        </div>
        <div class="col2"><img src="[[data.url]]" /></div>
      </div>
    `;
  }
}

window.customElements.define("card-element", CardElement);
