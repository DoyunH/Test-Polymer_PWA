import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../Card_element/CardElement";
import "@polymer/iron-ajax/iron-ajax";

/**
 * @customElement
 * @polymer
 */
class Pwa_polymerApp extends PolymerElement {
  handleResponse(event, request) {
    console.log(request.response);
    this.data = request.response;
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        header {
          font-family: sans-serif;
          background-color: #0b3d91;
          color: #fff;
          text-align: center;
          height: 40px;
          line-height: 40px;
        }
      </style>
      <header>NASA: foto del dia</header>
      <card-element data="[[data]]"></card-element>

      <iron-ajax
        auto
        url="https://api.nasa.gov/planetary/apod"
        params='{"api_key": "TTa8RDdRjfqDHZdmFctsbdIkbOC8Xcatfo1LVk9c"}'
        handle-as="json"
        method="GET"
        on-response="handleResponse"
        debounce-duration="300"
      >
      </iron-ajax>
    `;
  }
}

window.customElements.define("pwa_polymer-app", Pwa_polymerApp);
