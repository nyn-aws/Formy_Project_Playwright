import { Page } from "@playwright/test";

export class PageScrollPage {
  constructor(public page: Page) {}

  // Locators
  fullNameInput = () => this.page.locator("#name");
  dateInput = () => this.page.locator("#date");

  // Actions
  async scrollAndFillForm(fullName: string, date: string) {
    await this.fullNameInput().scrollIntoViewIfNeeded();
    await this.fullNameInput().fill(fullName);

    await this.dateInput().scrollIntoViewIfNeeded();
    await this.dateInput().fill(date);
    await this.page.keyboard.press("Escape"); // Close datepicker if it opens
  }
}
