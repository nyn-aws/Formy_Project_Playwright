import { Page } from "@playwright/test";

export class CheckboxPage {
  constructor(public page: Page) {}

  // Locators
  checkbox1 = () => this.page.locator("#checkbox-1");
  checkbox2 = () => this.page.locator("#checkbox-2");
  checkbox3 = () => this.page.locator("#checkbox-3");

  // Actions
  async checkAllCheckboxes() {
    await this.checkbox1().check();
    await this.checkbox2().check();
    await this.checkbox3().check();
  }

  async uncheckAllCheckboxes() {
    await this.checkbox1().uncheck();
    await this.checkbox2().uncheck();
    await this.checkbox3().uncheck();
  }
}
