import { Page } from "@playwright/test";

export class AutocompletePage {
  constructor(public page: Page) {}

  // Locators
  addressInput = () => this.page.locator("#autocomplete");
  streetAddressInput = () => this.page.locator("#street_number");
  streetAddress2Input = () => this.page.locator("#route");
  cityInput = () => this.page.locator("#locality");
  stateInput = () => this.page.locator("#administrative_area_level_1");
  zipCodeInput = () => this.page.locator("#postal_code");
  countryInput = () => this.page.locator("#country");

  // Actions
  async fillAddress(address: string) {
    await this.addressInput().fill(address);
    // For now, a simple wait is used.
  }
}
