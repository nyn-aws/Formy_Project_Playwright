import { test, expect } from "@playwright/test";
import { PageScrollPage } from "../src/pages/PageScrollPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Page Scroll page", () => {
  test(
    "should scroll to elements and fill the form",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that the page can be scrolled and form elements can be filled.",
        },
      ],
    },
    async ({ page }) => {
      const pageScrollPage = new PageScrollPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Page Scroll link | The page navigates to the Page Scroll page.", async () => {
        await homePage.clickPageScrollLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/scroll"
        );
      });

      await test.step("Step_3 | Scroll to elements and fill the form | The form fields are populated with the provided data.", async () => {
        await pageScrollPage.scrollAndFillForm("Jane Doe", "01/01/2025");
      });

      await test.step("Step_4 | Verify the full name and date input fields are populated | The full name input displays 'Jane Doe' and the date input displays '01/01/2025'.", async () => {
        await expect(pageScrollPage.fullNameInput()).toHaveValue("Jane Doe");
        await expect(pageScrollPage.dateInput()).toHaveValue("01/01/2025");
      });
    }
  );
});
