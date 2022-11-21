import { steps } from "../stores/steps.js";

export class EditorSteps extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    steps.$subscribe(this.render.bind(this));
    this.render();
  }

  disconnectedCallback() {
    steps.$unsubscribe(this.render);
  }

  render() {
    const html = steps.steps
      .map((step) => step.id)
      .map(
        (id) => /* html */ `
        <editor-step key="${id}"></editor-step>
        `
      )
      .join("");

    this.shadow.innerHTML = html;
  }
}

customElements.define("editor-steps", EditorSteps);
