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
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <card-element></card-element>

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
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "PWA_polymer-app",
      },
    };
  }
}

window.customElements.define("pwa_polymer-app", Pwa_polymerApp);
