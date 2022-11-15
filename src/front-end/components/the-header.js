import { html, LitElement } from "../vendors/lit.js";

export class TheHeader extends LitElement {
  render() {
    return html`<h1>Hello World</h1>`;
  }
}
customElements.define("the-header", TheHeader);
