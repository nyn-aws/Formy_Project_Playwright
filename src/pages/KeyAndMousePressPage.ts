import { Page } from "@playwright/test";

export class KeyAndMousePressPage {
  constructor(public page: Page) {}

  // Locators
  fullNameInput = () => this.page.locator("#name");
  button = () => this.page.locator("#button");

  // Actions
  async enterFullName(name: string) {
    await this.fullNameInput().fill(name);
  }

  async clickButton() {
    await this.button().click();
  }
}
