import { Page } from "@playwright/test";

export class ModalPage {
  constructor(public page: Page) {}

  // Locators
  openModalButton = () => this.page.locator("#modal-button");
  modalTitle = () => this.page.locator("#exampleModalLabel");
  // closeButton = () => this.page.locator('.modal-footer .btn-secondary');
  closeButton = () => this.page.getByRole("button", { name: "Close" }).first(); // Targeting the first visible close button
  saveChangesButton = () => this.page.locator(".modal-footer .btn-primary");

  // Actions
  async openModal() {
    await this.openModalButton().click();
    await this.page.waitForSelector("#exampleModalLabel", { state: "visible" }); // Wait for the modal to be visible
  }

  async closeModal() {
    await this.closeButton().click();
  }

  async saveChanges() {
    await this.saveChangesButton().click();
  }
}
