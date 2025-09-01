import { test, expect } from "@playwright/test";
import { DatepickerPage } from "../src/pages/DatepickerPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Datepicker page", () => {
  test(
    "should select a date successfully",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that a date can be selected from the datepicker and the input field is updated.",
        },
      ],
    },
    async ({ page }) => {
      const datepickerPage = new DatepickerPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Datepicker link | The page navigates to the Datepicker page.", async () => {
        await homePage.clickDatepickerLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/datepicker"
        );
      });

      await test.step("Step_3 | Select a date from the datepicker | The date input field is updated with the selected date.", async () => {
        // Select day 20.
        await datepickerPage.selectDate("10", "20", "2025");
      });

      await test.step("Step_4 | Verify the date input field is populated with the selected date | The date input field displays '10/20/2025'.", async () => {
        await expect(datepickerPage.dateInput()).toHaveValue("10/20/2025");
      });
    }
  );
});
