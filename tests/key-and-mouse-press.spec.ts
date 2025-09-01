import { test, expect } from "@playwright/test";
import { KeyAndMousePressPage } from "../src/pages/KeyAndMousePressPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Key and Mouse Press page", () => {
  test(
    "should enter text and click the button",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that text can be entered into the input field and the button can be clicked.",
        },
      ],
    },
    async ({ page }) => {
      const keyAndMousePressPage = new KeyAndMousePressPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Key and Mouse Press link | The page navigates to the Key and Mouse Press page.", async () => {
        await homePage.clickKeyAndMousePressLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/keypress"
        );
      });

      await test.step("Step_3 | Enter full name into the input field | The input field is populated with 'John Doe'.", async () => {
        await keyAndMousePressPage.enterFullName("John Doe");
        await expect(keyAndMousePressPage.fullNameInput()).toHaveValue(
          "John Doe"
        );
      });

      await test.step("Step_4 | Click the button | The button is clicked successfully.", async () => {
        await expect(keyAndMousePressPage.button()).toBeVisible();
        await expect(keyAndMousePressPage.button()).toBeEnabled();
        await keyAndMousePressPage.clickButton();
      });
      // There is no visible result element after clicking the button on this page.
      // The test only verifies that the button can be clicked without error.
      // await expect(page.locator('#result')).toHaveText('You entered: John Doe');
    }
  );
});
