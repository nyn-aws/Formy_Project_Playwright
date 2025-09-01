import { Page } from "@playwright/test";

export class DropdownPage {
  constructor(public page: Page) {}

  // Locators
  dropdownButton = () => this.page.locator("#dropdownMenuButton");
  // dropdownItem(name: string) {
  //   return this.page.locator(`div.dropdown-menu a.dropdown-item[href="/${name.toLowerCase().replace(/ /g, '')}"]`);
  // }

  // Actions
  async selectDropdownItem(itemName: string) {
    await this.dropdownButton().click();
    await this.page.getByRole("link", { name: itemName, exact: true }).click();
  }
}
