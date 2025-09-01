import { test, expect } from "@playwright/test";
import { SwitchWindowPage } from "../src/pages/SwitchWindowPage";
import { HomePage } from "../src/pages/HomePage";

test.describe("Switch Window page", () => {
  test(
    "should open a new tab and switch to it",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that a new tab can be opened, switched to, and then closed, returning to the original tab.",
        },
      ],
    },
    async ({ page }) => {
      const switchWindowPage = new SwitchWindowPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Switch Window link | The page navigates to the Switch Window page.", async () => {
        await homePage.clickSwitchWindowLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/switch-window"
        );
      });

      let newPage;
      await test.step("Step_3 | Open a new tab and switch to it | A new tab is opened and the focus is switched to it.", async () => {
        newPage = await switchWindowPage.openNewTabAndSwitch();
      });

      await test.step("Step_4 | Verify the URL of the new tab | The new tab navigates to https://formy-project.herokuapp.com/.", async () => {
        await expect(newPage).toHaveURL("https://formy-project.herokuapp.com/"); // The new tab opens to the home page
      });

      await test.step("Step_5 | Close the new tab | The new tab is closed.", async () => {
        await newPage.close(); // Close the new tab
      });

      await test.step("Step_6 | Verify the original tab is active | The original tab is still on the Switch Window page.", async () => {
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/switch-window"
        ); // Original tab should still be there
      });
    }
  );

  test(
    "should open an alert and accept it",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that an alert can be opened and accepted successfully.",
        },
      ],
    },
    async ({ page }) => {
      const switchWindowPage = new SwitchWindowPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the Switch Window link | The page navigates to the Switch Window page.", async () => {
        await homePage.clickSwitchWindowLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/switch-window"
        );
      });

      let dialogMessage = "";
      await test.step("Step_3 | Set up dialog listener and open alert | The alert dialog appears and its message is captured.", async () => {
        page.on("dialog", async (dialog) => {
          dialogMessage = dialog.message();
          await dialog.accept();
        });
        await switchWindowPage.openAlertButton().click();
      });

      await test.step("Step_4 | Verify the alert message | The alert message is 'This is a test alert!'.", async () => {
        expect(dialogMessage).toBe("This is a test alert!");
      });
    }
  );
});
