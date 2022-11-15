import { html, LitElement } from "../vendors/lit.js";
import "./editor-steps.js";

let id = 0;

export class TheEditor extends LitElement {
  static properties = {
    steps: { type: Array, state: true },
  };

  addStep() {
    console.log("addStep");
    this.steps = [...this.steps, { id: id++ }];
  }

  constructor() {
    super();
    this.steps = [];
  }

  render() {
    return html`
      <div>
        <h2>Editor</h2>
        <button @click=${this.addStep}>+</button>
        <editor-steps .steps=${this.steps}></editor-steps>
      </div>
    `;
  }
}

customElements.define("the-editor", TheEditor);
