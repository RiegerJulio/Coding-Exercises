export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.tempate(model);
        this.elemento.innerHTML = template;
    }
    tempate(model) {
        throw new Error('O método template deve ser implementado');
    }
}
