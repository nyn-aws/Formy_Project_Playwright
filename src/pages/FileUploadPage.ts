import { Page } from "@playwright/test";
import * as path from "path";

export class FileUploadPage {
  constructor(public page: Page) {}

  // Locators
  chooseFileButton = () => this.page.locator("#file-upload");
  fileInput = () => this.page.locator('input[type="file"]'); // This is the actual file input
  fileUploadField = () => this.page.locator("#file-upload-field"); // This is the displayed field
  resetButton = () => this.page.locator(".btn.btn-warning");

  // Actions
  async uploadFile(filePath: string) {
    await this.fileInput().setInputFiles(filePath);
  }

  async getUploadedFileName() {
    return await this.fileUploadField().inputValue();
  }

  async resetForm() {
    await this.resetButton().click();
  }
}
