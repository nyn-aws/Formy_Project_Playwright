import { test, expect } from "@playwright/test";
import { RadioButtonPage } from "../src/pages/RadioButtonPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Radio Button page", () => {
  test(
    "should select radio button 1",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that radio button 1 can be selected successfully.",
        },
      ],
    },
    async ({ page }) => {
      const radioButtonPage = new RadioButtonPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Radio Button link | The page navigates to the Radio Button page.", async () => {
        await homePage.clickRadioButtonLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/radiobutton"
        );
      });

      await test.step("Step_3 | Select radio button 1 | Radio button 1 is checked and others are unchecked.", async () => {
        await radioButtonPage.selectRadioButton(1);
        await expect(radioButtonPage.radioButton1()).toBeChecked();
        await expect(radioButtonPage.radioButton2()).not.toBeChecked();
        await expect(radioButtonPage.radioButton3()).not.toBeChecked();
      });
    }
  );

  test(
    "should select radio button 2",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that radio button 2 can be selected successfully.",
        },
      ],
    },
    async ({ page }) => {
      const radioButtonPage = new RadioButtonPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Radio Button link | The page navigates to the Radio Button page.", async () => {
        await homePage.clickRadioButtonLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/radiobutton"
        );
      });

      await test.step("Step_3 | Select radio button 2 | Radio button 2 is checked and others are unchecked.", async () => {
        await radioButtonPage.selectRadioButton(2);
        await expect(radioButtonPage.radioButton1()).not.toBeChecked();
        await expect(radioButtonPage.radioButton2()).toBeChecked();
        await expect(radioButtonPage.radioButton3()).not.toBeChecked();
      });
    }
  );

  test(
    "should select radio button 3",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that radio button 3 can be selected successfully.",
        },
      ],
    },
    async ({ page }) => {
      const radioButtonPage = new RadioButtonPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Radio Button link | The page navigates to the Radio Button page.", async () => {
        await homePage.clickRadioButtonLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/radiobutton"
        );
      });

      await test.step("Step_3 | Select radio button 3 | Radio button 3 is checked and others are unchecked.", async () => {
        await radioButtonPage.selectRadioButton(3);
        await expect(radioButtonPage.radioButton1()).not.toBeChecked();
        await expect(radioButtonPage.radioButton2()).not.toBeChecked();
        await expect(radioButtonPage.radioButton3()).toBeChecked();
      });
    }
  );
});
