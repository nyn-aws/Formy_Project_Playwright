import { test, expect } from "@playwright/test";
import { CheckboxPage } from "../src/pages/CheckboxPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Checkbox page", () => {
  test(
    "should check and uncheck all checkboxes",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that all checkboxes on the page can be checked and unchecked.",
        },
      ],
    },
    async ({ page }) => {
      const checkboxPage = new CheckboxPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Checkbox link | The page navigates to the Checkbox page.", async () => {
        await homePage.clickCheckboxLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/checkbox"
        );
      });

      await test.step("Step_3 | Check all checkboxes and verify their state | All checkboxes are checked.", async () => {
        await checkboxPage.checkAllCheckboxes();
        await expect(checkboxPage.checkbox1()).toBeChecked();
        await expect(checkboxPage.checkbox2()).toBeChecked();
        await expect(checkboxPage.checkbox3()).toBeChecked();
      });

      await test.step("Step_4 | Uncheck all checkboxes and verify their state | All checkboxes are unchecked.", async () => {
        await checkboxPage.uncheckAllCheckboxes();
        await expect(checkboxPage.checkbox1()).not.toBeChecked();
        await expect(checkboxPage.checkbox2()).not.toBeChecked();
        await expect(checkboxPage.checkbox3()).not.toBeChecked();
      });
    }
  );
});
