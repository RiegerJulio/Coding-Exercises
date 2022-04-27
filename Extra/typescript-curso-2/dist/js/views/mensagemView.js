export class MensagemView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    tempate(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
    update(model) {
        const template = this.tempate(model);
        this.elemento.innerHTML = template;
    }
}
