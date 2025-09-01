import { Page } from "@playwright/test";

export class HomePage {
  constructor(public page: Page) {}

  // Locators for navigation links
  autocompleteLink = () =>
    this.page.getByRole("link", { name: "Autocomplete" });
  buttonsLink = () => this.page.getByRole("link", { name: "Buttons" });
  checkboxLink = () => this.page.getByRole("link", { name: "Checkbox" });
  datepickerLink = () => this.page.getByRole("link", { name: "Datepicker" });
  dragAndDropLink = () =>
    this.page.getByRole("link", { name: "Drag and Drop" });
  dropdownLink = () => this.page.getByRole("link", { name: "Dropdown" });
  enabledAndDisabledElementsLink = () =>
    this.page.getByRole("link", { name: "Enabled and disabled elements" });
  fileUploadLink = () => this.page.getByRole("link", { name: "File Upload" });
  keyAndMousePressLink = () =>
    this.page.getByRole("link", { name: "Key and Mouse Press" });
  modalLink = () => this.page.getByRole("link", { name: "Modal" });
  pageScrollLink = () => this.page.getByRole("link", { name: "Page Scroll" });
  radioButtonLink = () => this.page.getByRole("link", { name: "Radio Button" });
  switchWindowLink = () =>
    this.page.getByRole("link", { name: "Switch Window" });
  completeWebFormLink = () =>
    this.page.getByRole("link", { name: "Complete Web Form" });

  // Actions
  async navigateToHomePage() {
    await this.page.goto("https://formy-project.herokuapp.com/");
  }

  async clickAutocompleteLink() {
    await this.autocompleteLink().click();
  }

  async clickButtonsLink() {
    await this.buttonsLink().click();
  }

  async clickCheckboxLink() {
    await this.checkboxLink().click();
  }

  async clickDatepickerLink() {
    await this.datepickerLink().click();
  }

  async clickDragAndDropLink() {
    await this.dragAndDropLink().click();
  }

  async clickDropdownLink() {
    await this.dropdownLink().click();
  }

  async clickEnabledAndDisabledElementsLink() {
    await this.enabledAndDisabledElementsLink().click();
  }

  async clickFileUploadLink() {
    await this.fileUploadLink().click();
  }

  async clickKeyAndMousePressLink() {
    await this.keyAndMousePressLink().click();
  }

  async clickModalLink() {
    await this.modalLink().click();
  }

  async clickPageScrollLink() {
    await this.pageScrollLink().click();
  }

  async clickRadioButtonLink() {
    await this.radioButtonLink().click();
  }

  async clickSwitchWindowLink() {
    await this.switchWindowLink().click();
  }

  async clickCompleteWebFormLink() {
    await this.completeWebFormLink().click();
  }
}
