export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.tempate(model);
    this.elemento.innerHTML = template;
  }

  abstract tempate(model: T): string;
}