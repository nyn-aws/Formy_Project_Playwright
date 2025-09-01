import { Page } from "@playwright/test";

export class DatepickerPage {
  constructor(public page: Page) {}

  // Locators
  dateInput = () => this.page.locator("#datepicker");
  // Assuming the date picker pop-up appears with a table structure
  // This locator will find a specific day within the datepicker
  // I will make it general and pass the specific day number as a string
  dayInCalendar = (day: string) =>
    this.page.locator(`.datepicker-days td.day:text("${day}")`);

  // Actions
  async selectDate(month: string, day: string, year: string) {
    const dateToSet = `${month}/${day}/${year}`;
    await this.dateInput().evaluate((element, date) => {
      (element as HTMLInputElement).value = date;
    }, dateToSet);
    await this.page.keyboard.press("Escape"); // To ensure the datepicker modal is dismissed if it appears
  }
}
