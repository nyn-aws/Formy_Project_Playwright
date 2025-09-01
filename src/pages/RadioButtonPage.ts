import { Page } from "@playwright/test";

export class RadioButtonPage {
  constructor(public page: Page) {}

  // Locators
  radioButton1 = () => this.page.locator("#radio-button-1");
  radioButton2 = () => this.page.locator('input[type="radio"]').nth(1);
  radioButton3 = () => this.page.locator('input[type="radio"]').nth(2);

  // Actions
  async selectRadioButton(option: 1 | 2 | 3) {
    switch (option) {
      case 1:
        await this.radioButton1().check();
        break;
      case 2:
        await this.radioButton2().check();
        break;
      case 3:
        await this.radioButton3().check();
        break;
    }
  }
}
