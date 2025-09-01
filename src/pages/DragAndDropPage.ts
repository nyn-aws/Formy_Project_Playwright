import { Page } from "@playwright/test";

export class DragAndDropPage {
  constructor(public page: Page) {}

  // Locators
  draggableImage = () => this.page.locator("#image");
  dropBox = () => this.page.locator("#box");

  // Actions
  async performDragAndDrop() {
    await this.draggableImage().dragTo(this.dropBox());
  }
}
