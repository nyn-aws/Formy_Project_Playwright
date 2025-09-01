import { Page } from "@playwright/test";

export class SwitchWindowPage {
  constructor(public page: Page) {}

  // Locators
  openNewTabButton = () => this.page.locator("#new-tab-button");
  openAlertButton = () => this.page.locator("#alert-button");

  // Actions
  async openNewTabAndSwitch() {
    const [newTabPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.openNewTabButton().click(),
    ]);
    await newTabPage.waitForLoadState("domcontentloaded"); // Wait for the new page to load
    return newTabPage; // Return the new page object
  }

  async openAlertAndAccept() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.openAlertButton().click();
  }
}
