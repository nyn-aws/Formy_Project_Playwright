import { Page } from "@playwright/test";

export class CompleteWebFormPage {
  constructor(public page: Page) {}

  // Locators
  firstNameInput = () => this.page.locator("#first-name");
  lastNameInput = () => this.page.locator("#last-name");
  jobTitleInput = () => this.page.locator("#job-title");
  highSchoolRadio = () => this.page.locator("#radio-button-1");
  collegeRadio = () => this.page.locator("#radio-button-2");
  gradSchoolRadio = () => this.page.locator("#radio-button-3");
  maleCheckbox = () => this.page.locator("#checkbox-1");
  femaleCheckbox = () => this.page.locator("#checkbox-2");
  preferNotToSayCheckbox = () => this.page.locator("#checkbox-3");
  experienceDropdown = () => this.page.locator("#select-menu");
  dateInput = () => this.page.locator("#datepicker");
  submitButton = () => this.page.locator(".btn.btn-lg.btn-primary");

  // Actions
  async fillForm(
    firstName: string,
    lastName: string,
    jobTitle: string,
    education: "High School" | "College" | "Grad School",
    sex: "Male" | "Female" | "Prefer not to say",
    experience: "0-1" | "2-4" | "5-9" | "10+",
    date: string
  ) {
    await this.firstNameInput().fill(firstName);
    await this.lastNameInput().fill(lastName);
    await this.jobTitleInput().fill(jobTitle);

    switch (education) {
      case "High School":
        await this.highSchoolRadio().check();
        break;
      case "College":
        await this.collegeRadio().check();
        break;
      case "Grad School":
        await this.gradSchoolRadio().check();
        break;
    }

    switch (sex) {
      case "Male":
        await this.maleCheckbox().check();
        break;
      case "Female":
        await this.femaleCheckbox().check();
        break;
      case "Prefer not to say":
        await this.preferNotToSayCheckbox().check();
        break;
    }

    await this.experienceDropdown().selectOption(experience);
    await this.dateInput().fill(date);
  }

  async submitForm() {
    await this.submitButton().click();
  }
}
