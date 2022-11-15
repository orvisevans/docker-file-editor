export class TheHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const html = /*html*/ `<h1>Hello World</h1>`;
    this.shadow.innerHTML = html;
  }
}
customElements.define("the-header", TheHeader);
