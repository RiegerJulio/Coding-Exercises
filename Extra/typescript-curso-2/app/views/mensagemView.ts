import { View } from "./view.js";

export class MensagemView extends View<string> {

  tempate(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `;
  }
}