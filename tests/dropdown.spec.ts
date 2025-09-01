import { test, expect } from "@playwright/test";
import { DropdownPage } from "../src/pages/DropdownPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Dropdown page", () => {
  test(
    "should select an item from the dropdown",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that an item can be selected from the dropdown and navigates to the correct page.",
        },
      ],
    },
    async ({ page }) => {
      const dropdownPage = new DropdownPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Dropdown link | The page navigates to the Dropdown page.", async () => {
        await homePage.clickDropdownLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/dropdown"
        );
      });

      await test.step("Step_3 | Select 'Autocomplete' from the dropdown | The 'Autocomplete' item is selected.", async () => {
        await dropdownPage.selectDropdownItem("Autocomplete"); // Select Autocomplete from the dropdown
      });

      await test.step("Step_4 | Verify navigation to the Autocomplete page | The page navigates to https://formy-project.herokuapp.com/autocomplete.", async () => {
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/autocomplete"
        );
      });
    }
  );
});
