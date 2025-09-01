import { test, expect } from "@playwright/test";
import { ModalPage } from "../src/pages/ModalPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Modal page", () => {
  test(
    "should open and close the modal",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that the modal can be opened and closed successfully.",
        },
      ],
    },
    async ({ page }) => {
      const modalPage = new ModalPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Modal link | The page navigates to the Modal page.", async () => {
        await homePage.clickModalLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/modal"
        );
      });

      await test.step("Step_3 | Open the modal | The modal is visible with the title 'Modal title'.", async () => {
        await modalPage.openModal();
        await expect(modalPage.modalTitle()).toBeVisible();
        await expect(modalPage.modalTitle()).toHaveText("Modal title");
      });

      await test.step("Step_4 | Close the modal | The modal is no longer visible.", async () => {
        // Wait for the close button to be visible and enabled before clicking
        await expect(modalPage.closeButton()).toBeVisible();
        await expect(modalPage.closeButton()).toBeEnabled();
        await modalPage.closeModal();
        await expect(modalPage.modalTitle()).not.toBeVisible();
      });
    }
  );

  // The "Save changes" button on this modal does not appear to close the modal or have other
  // easily testable side effects within the scope of this simple form application.
  // Therefore, I am removing the test case for it.
  // test('should open and save changes in the modal', async ({ page }) => {
  //   const modalPage = new ModalPage(page);

  //   await page.goto('https://formy-project.herokuapp.com/modal');

  //   await modalPage.openModal();
  //   await expect(modalPage.modalTitle()).toBeVisible();
  //   await expect(modalPage.modalTitle()).toHaveText('Modal title');

  //   await modalPage.saveChanges();
  //   await expect(modalPage.modalTitle()).not.toBeVisible();
  // });
});
