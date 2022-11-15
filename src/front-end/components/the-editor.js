import { addStep } from "../stores/steps.js";

export class TheEditor extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const html = /* html */ `
      <div>
        <h2>Editor</h2>
        <button id="add-step">+</button>
        <editor-steps></editor-steps>
      </div>
    `;

    shadow.innerHTML = html;

    shadow.getElementById("add-step").addEventListener("click", addStep);
  }
}

customElements.define("the-editor", TheEditor);
