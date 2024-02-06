const welcomeMessage = document.createElement("template");

welcomeMessage.innerHTML = `
<style>
    p {
        color: red;
    }
</style>
<p>Welcome Shadow Dom!</p>
`;

class WelcomeMessage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(welcomeMessage.content);
  }
}

customElements.define("welcome-message", WelcomeMessage);
