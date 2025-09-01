import { test, expect } from "@playwright/test";
import { AutocompletePage } from "../src/pages/AutocompletePage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Autocomplete", () => {
  test(
    "should fill the address and select a suggestion",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that the address field is populated after using autocomplete.",
        },
      ],
    },
    async ({ page }) => {
      const autocompletePage = new AutocompletePage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Autocomplete link | The page navigates to the Autocomplete page.", async () => {
        await homePage.clickAutocompleteLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/autocomplete"
        );
      });

      await test.step("Step_3 | Fill the address input field | The address input field is populated with the provided data.", async () => {
        await autocompletePage.fillAddress(
          "1600 Amphitheatre Parkway, Mountain View, CA"
        );
      });

      await test.step("Step_4 | Verify the address input field is populated | The address input field displays the correct value.", async () => {
        await expect(autocompletePage.addressInput()).toHaveValue(
          "1600 Amphitheatre Parkway, Mountain View, CA"
        );
      });
    }
  );
});
