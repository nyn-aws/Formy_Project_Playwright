import { test, expect } from "@playwright/test";
import { ButtonsPage } from "../src/pages/ButtonsPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Buttons page", () => {
  test(
    "should click all buttons successfully",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that all buttons on the page can be clicked successfully.",
        },
      ],
    },
    async ({ page }) => {
      const buttonsPage = new ButtonsPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Buttons link | The page navigates to the Buttons page.", async () => {
        await homePage.clickButtonsLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_3 | Click the 'Primary' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.primaryButton()).toBeVisible();
        await expect(buttonsPage.primaryButton()).toBeEnabled();
        await buttonsPage.clickPrimaryButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_4 | Click the 'Success' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.successButton()).toBeVisible();
        await expect(buttonsPage.successButton()).toBeEnabled();
        await buttonsPage.clickSuccessButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_5 | Click the 'Info' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.infoButton()).toBeVisible();
        await expect(buttonsPage.infoButton()).toBeEnabled();
        await buttonsPage.clickInfoButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_6 | Click the 'Warning' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.warningButton()).toBeVisible();
        await expect(buttonsPage.warningButton()).toBeEnabled();
        await buttonsPage.clickWarningButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_7 | Click the 'Danger' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.dangerButton()).toBeVisible();
        await expect(buttonsPage.dangerButton()).toBeEnabled();
        await buttonsPage.clickDangerButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_8 | Click the 'Link' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.linkButton()).toBeVisible();
        await expect(buttonsPage.linkButton()).toBeEnabled();
        await buttonsPage.clickLinkButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_9 | Click the 'Left' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.leftButton()).toBeVisible();
        await expect(buttonsPage.leftButton()).toBeEnabled();
        await buttonsPage.clickLeftButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_10 | Click the 'Middle' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.middleButton()).toBeVisible();
        await expect(buttonsPage.middleButton()).toBeEnabled();
        await buttonsPage.clickMiddleButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_11 | Click the 'Right' button | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.rightButton()).toBeVisible();
        await expect(buttonsPage.rightButton()).toBeEnabled();
        await buttonsPage.clickRightButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_12 | Click 'Button 1' | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.button1()).toBeVisible();
        await expect(buttonsPage.button1()).toBeEnabled();
        await buttonsPage.clickButton1();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_13 | Click 'Button 2' | The URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.button2()).toBeVisible();
        await expect(buttonsPage.button2()).toBeEnabled();
        await buttonsPage.clickButton2();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
      });

      await test.step("Step_14 | Click the 'Dropdown' button | The dropdown menu opens and the URL remains on the Buttons page.", async () => {
        await expect(buttonsPage.dropdownButton()).toBeVisible();
        await expect(buttonsPage.dropdownButton()).toBeEnabled();
        await buttonsPage.clickDropdownButton();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/buttons"
        );
        await expect(page.locator(".dropdown-menu.show")).toBeVisible(); // Assert dropdown menu is visible
      });
    }
  );
});
