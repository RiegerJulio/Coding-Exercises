import { View } from "./view.js";
export class MensagemView extends View {
    tempate(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
