import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
class CardElement extends PolymerElement {
  constructor() {
    super();

    this.data = {
      title: "mi primer component",
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div class="card">
        <div class="col1">
          <h1>[[data.title]]</h1>
          <h1>Desc</h1>
        </div>
        <div class="col2"><img src:''></div>
      </div>
    `;
  }
}

window.customElements.define("card-element", CardElement);
