import { state, subscribe } from "../stores/steps.js";

export class EditorSteps extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    const html = state.stepIds
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
