import { test, expect } from "@playwright/test";
import { EnabledAndDisabledElementsPage } from "../src/pages/EnabledAndDisabledElementsPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Enabled and Disabled Elements page", () => {
  test(
    "should verify disabled and enabled input fields",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that disabled input fields are not editable and enabled fields are functional.",
        },
      ],
    },
    async ({ page }) => {
      const enabledAndDisabledElementsPage = new EnabledAndDisabledElementsPage(
        page
      );
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Enabled and disabled elements link | The page navigates to the Enabled and disabled elements page.", async () => {
        await homePage.clickEnabledAndDisabledElementsLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/enabled"
        );
      });

      await test.step("Step_3 | Verify that the disabled input field is disabled | The disabled input field is not editable.", async () => {
        await expect(
          enabledAndDisabledElementsPage.disabledInputField()
        ).toBeDisabled();
      });

      await test.step("Step_4 | Verify that the enabled input field is enabled | The enabled input field is editable.", async () => {
        await expect(
          enabledAndDisabledElementsPage.enabledInputField()
        ).toBeEnabled();
      });

      await test.step("Step_5 | Type text into the enabled field | The enabled input field is populated with 'Hello World'.", async () => {
        await enabledAndDisabledElementsPage.typeIntoEnabledField(
          "Hello World"
        );
        await expect(
          enabledAndDisabledElementsPage.enabledInputField()
        ).toHaveValue("Hello World");
      });
    }
  );
});
