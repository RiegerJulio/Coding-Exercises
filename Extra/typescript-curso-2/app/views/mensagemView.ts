export class MensagemView {
  private elemento: HTMLElement;
  
  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  tempate(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `;
  }

  update(model: string): void {
    const template = this.tempate(model);
    this.elemento.innerHTML = template;
  }
}