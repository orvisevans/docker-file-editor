import { steps } from "../stores/steps.js";

export class EditorStep extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  async render() {
    const key = this.getAttribute("key");
    const step = steps.steps[key];

    const html = /*html*/ `
      <div>
        ${step.id}
        <select-instruction></select-instruction>
      </div>
    `;

    this.shadow.innerHTML = html;
  }
}

customElements.define("editor-step", EditorStep);
