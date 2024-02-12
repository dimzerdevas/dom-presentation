class WelcomeMessage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
    <div>Hello from the Shadow DOM!</div>`;
  }
}

customElements.define("welcome-message", WelcomeMessage);
