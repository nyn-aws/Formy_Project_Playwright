import { Page } from "@playwright/test";

export class ButtonsPage {
  constructor(public page: Page) {}

  // Locators
  primaryButton = () => this.page.getByRole("button", { name: "Primary" });
  successButton = () => this.page.getByRole("button", { name: "Success" });
  infoButton = () => this.page.getByRole("button", { name: "Info" });
  warningButton = () => this.page.getByRole("button", { name: "Warning" });
  dangerButton = () => this.page.getByRole("button", { name: "Danger" });
  linkButton = () => this.page.getByRole("button", { name: "Link" });
  leftButton = () => this.page.getByRole("button", { name: "Left" });
  middleButton = () => this.page.getByRole("button", { name: "Middle" });
  rightButton = () => this.page.getByRole("button", { name: "Right" });
  button1 = () => this.page.getByRole("button", { name: "1" });
  button2 = () => this.page.getByRole("button", { name: "2" });
  dropdownButton = () => this.page.getByRole("button", { name: "Dropdown" });

  // Actions
  async clickPrimaryButton() {
    await this.primaryButton().click();
  }

  async clickSuccessButton() {
    await this.successButton().click();
  }

  async clickInfoButton() {
    await this.infoButton().click();
  }

  async clickWarningButton() {
    await this.warningButton().click();
  }

  async clickDangerButton() {
    await this.dangerButton().click();
  }

  async clickLinkButton() {
    await this.linkButton().click();
  }

  async clickLeftButton() {
    await this.leftButton().click();
  }

  async clickMiddleButton() {
    await this.middleButton().click();
  }

  async clickRightButton() {
    await this.rightButton().click();
  }

  async clickButton1() {
    await this.button1().click();
  }

  async clickButton2() {
    await this.button2().click();
  }

  async clickDropdownButton() {
    await this.dropdownButton().click();
  }
}
