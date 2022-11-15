import { html, LitElement } from "../vendors/lit.js";

export class EditorStep extends LitElement {
  static properties = {
    step: { type: Object },
  };

  constructor() {
    super();
    this.step = {};
  }

  render() {
    return html`<div>${this.step.id}</div>`;
  }
}

customElements.define("editor-step", EditorStep);
