import { test, expect } from "@playwright/test";
import { CompleteWebFormPage } from "../src/pages/CompleteWebFormPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Complete Web Form", () => {
  test(
    "should successfully submit the form with valid data",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies successful submission of the complete web form with valid data.",
        },
      ],
    },
    async ({ page }) => {
      const completeWebFormPage = new CompleteWebFormPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Complete Web Form link | The page navigates to the Complete Web Form page.", async () => {
        await homePage.clickCompleteWebFormLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/form"
        );
      });

      await test.step("Step_3 | Fill all input fields in the form with valid data | All form fields are populated with the provided data.", async () => {
        await completeWebFormPage.fillForm(
          "John",
          "Doe",
          "Software Engineer",
          "College",
          "Male",
          "2-4",
          "12/25/2024"
        );
      });

      await test.step("Step_4 | Submit the form | The form is submitted successfully.", async () => {
        await completeWebFormPage.submitForm();
      });

      await test.step("Step_5 | Verify the success message is displayed | A success message 'The form was successfully submitted!' is visible.", async () => {
        await expect(page.locator(".alert.alert-success")).toHaveText(
          "The form was successfully submitted!"
        );
      });
    }
  );
});
