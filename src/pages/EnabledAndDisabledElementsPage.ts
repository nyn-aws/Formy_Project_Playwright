import { Page } from "@playwright/test";

export class EnabledAndDisabledElementsPage {
  constructor(public page: Page) {}

  // Locators
  disabledInputField = () => this.page.locator("#disabledInput");
  enabledInputField = () => this.page.locator("#input");

  // Actions
  async typeIntoEnabledField(text: string) {
    await this.enabledInputField().fill(text);
  }
}
