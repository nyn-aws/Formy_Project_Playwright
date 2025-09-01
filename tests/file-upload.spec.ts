import { test, expect } from "@playwright/test";
import { FileUploadPage } from "../src/pages/FileUploadPage";
import { HomePage } from "../src/pages/HomePage";
import * as path from "path";

test.describe("File Upload page", () => {
  test(
    "should successfully upload a file",
    {
      tag: "@smoke",
      annotation: [
        {
          type: "functional",
          description:
            "Verifies that a file can be successfully uploaded and the file name is displayed, then the form can be reset.",
        },
      ],
    },
    async ({ page }) => {
      const fileUploadPage = new FileUploadPage(page);
      const homePage = new HomePage(page);

      await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
        await homePage.navigateToHomePage();
      });

      await test.step("Step_2 | Click the File Upload link | The page navigates to the File Upload page.", async () => {
        await homePage.clickFileUploadLink();
        await expect(page).toHaveURL(
          "https://formy-project.herokuapp.com/fileupload"
        );
      });

      const filePath = path.join(__dirname, "../src/dummy.txt");

      await test.step("Step_3 | Upload a dummy file | The file is uploaded successfully.", async () => {
        await fileUploadPage.uploadFile(filePath);
      });

      await test.step("Step_4 | Verify the file name is displayed in the input field | The input field displays 'dummy.txt'.", async () => {
        await expect(fileUploadPage.fileUploadField()).toHaveValue("dummy.txt");
      });

      await test.step("Step_5 | Reset the form | The file upload field is cleared.", async () => {
        await fileUploadPage.resetForm();
        await expect(fileUploadPage.fileUploadField()).toHaveValue("");
      });
    }
  );
});
