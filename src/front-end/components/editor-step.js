import { state } from "../stores/steps.js";

export class EditorStep extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const key = this.getAttribute("key");
    const step = state.steps[key];

    const html = /*html*/ `<div>${step.id}</div>`;

    this.shadow.innerHTML = html;
  }
}

customElements.define("editor-step", EditorStep);
