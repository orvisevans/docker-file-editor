import { options } from "../stores/instruction-options.js";

export class SelectInstruction extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    if (!options.loading && !options.loading) this.fetchOptions();
    options.$subscribe(this.render.bind(this));
    this.render();
  }

  async fetchOptions() {
    options.loading = true;
    const response = await fetch("/api/stepOptions.php");
    const options = await response.json();
    options.options = options;
    options.loading = false;
  }

  async render() {
    const html = /*html*/ `
      <select>
        ${options.options.map(
          (option) => /*html*/ `
          <option value="${option.id}">${option.name}</option>
        `
        )}
      </select>
    `;

    this.shadow.innerHTML = html;
  }
}

customElements.define("select-instruction", SelectInstruction);
