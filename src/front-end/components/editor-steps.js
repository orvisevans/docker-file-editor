import { html, LitElement, repeat } from "/vendors/lit.js";
import "./editor-step.js";

export class EditorSteps extends LitElement {
  static properties = {
    steps: { type: Array },
  };

  constructor() {
    super();
    this.steps = [];
  }

  render() {
    return repeat(
      this.steps,
      (step) => step.id,
      (step) => html`<editor-step .step=${step} />`
    );
  }
}

customElements.define("editor-steps", EditorSteps);
