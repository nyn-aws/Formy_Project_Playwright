# Formy Project Playwright Automation

A comprehensive Playwright automation framework for testing the [Formy Project](https://formy-project.herokuapp.com/) website. This project demonstrates best practices in UI automation testing using Playwright with TypeScript, implementing the Page Object Model (POM) pattern.

## 🚀 Features

- **Complete Test Coverage**: 51 test cases covering all available pages and components
- **Page Object Model**: Well-structured page objects for maintainable test code
- **TypeScript**: Full TypeScript support for type safety and better development experience
- **Test Steps**: Structured test steps with detailed descriptions and expected outcomes
- **Comprehensive Assertions**: Rich assertions beyond simple URL verification
- **Homepage Navigation**: Realistic user flow testing by navigating from homepage
- **Cross-browser Testing**: Support for Chromium, Firefox, and WebKit
- **Detailed Reporting**: HTML reports with step-by-step test execution details

## 📋 Test Coverage

The framework covers the following pages and components:

| Page                          | Test Cases | Description                           |
| ----------------------------- | ---------- | ------------------------------------- |
| **Complete Web Form**         | 1          | Form submission with validation       |
| **Autocomplete**              | 1          | Address autocomplete functionality    |
| **Buttons**                   | 1          | All button types and interactions     |
| **Checkbox**                  | 1          | Checkbox selection and validation     |
| **Datepicker**                | 1          | Date selection and input validation   |
| **Drag and Drop**             | 1          | Drag and drop functionality           |
| **Dropdown**                  | 1          | Dropdown selection and navigation     |
| **Enabled/Disabled Elements** | 1          | Form field state validation           |
| **File Upload**               | 1          | File upload and form reset            |
| **Key and Mouse Press**       | 1          | Input field and button interactions   |
| **Modal**                     | 1          | Modal open/close functionality        |
| **Page Scroll**               | 1          | Scrolling and form filling            |
| **Radio Button**              | 3          | Radio button selection states         |
| **Switch Window**             | 2          | New tab handling and alert management |

**Total: 51 test cases**

## 🏗️ Project Structure

```
Formy_Project_Playwright/
├── src/
│   └── pages/                    # Page Object Models
│       ├── HomePage.ts           # Homepage navigation
│       ├── CompleteWebFormPage.ts
│       ├── AutocompletePage.ts
│       ├── ButtonsPage.ts
│       ├── CheckboxPage.ts
│       ├── DatepickerPage.ts
│       ├── DragAndDropPage.ts
│       ├── DropdownPage.ts
│       ├── EnabledAndDisabledElementsPage.ts
│       ├── FileUploadPage.ts
│       ├── KeyAndMousePressPage.ts
│       ├── ModalPage.ts
│       ├── PageScrollPage.ts
│       ├── RadioButtonPage.ts
│       └── SwitchWindowPage.ts
├── tests/                        # Test specifications
│   ├── complete-web-form.spec.ts
│   ├── autocomplete.spec.ts
│   ├── buttons.spec.ts
│   ├── checkbox.spec.ts
│   ├── datepicker.spec.ts
│   ├── drag-and-drop.spec.ts
│   ├── dropdown.spec.ts
│   ├── enabled-and-disabled-elements.spec.ts
│   ├── file-upload.spec.ts
│   ├── key-and-mouse-press.spec.ts
│   ├── modal.spec.ts
│   ├── page-scroll.spec.ts
│   ├── radio-button.spec.ts
│   └── switch-window.spec.ts
├── src/
│   └── dummy.txt                 # Test file for upload testing
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Formy_Project_Playwright
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🚀 Usage

### Running Tests

**Run all tests:**

```bash
npx playwright test
```

**Run tests in specific browser:**

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run specific test file:**

```bash
npx playwright test tests/buttons.spec.ts
```

**Run tests with specific tag:**

```bash
npx playwright test --grep @smoke
```

**Run tests in headed mode (visible browser):**

```bash
npx playwright test --headed
```

**Run tests in debug mode:**

```bash
npx playwright test --debug
```

### Test Reports

**Generate HTML report:**

```bash
npx playwright show-report
```

**Generate and open report:**

```bash
npx playwright test --reporter=html
```

## 🏗️ Architecture

### Page Object Model (POM)

The project follows the Page Object Model pattern for better maintainability:

- **Page Objects**: Located in `src/pages/` directory
- **Locators**: Centralized element selectors
- **Actions**: Methods that interact with page elements
- **Test Files**: Located in `tests/` directory

### Homepage Navigation

All tests now navigate from the homepage to simulate realistic user behavior:

```typescript
// Example from buttons.spec.ts
await test.step("Step_1 | Navigate to the homepage | The homepage is loaded.", async () => {
  await homePage.navigateToHomePage();
});

await test.step("Step_2 | Click the Buttons link | The page navigates to the Buttons page.", async () => {
  await homePage.clickButtonsLink();
  await expect(page).toHaveURL("https://formy-project.herokuapp.com/buttons");
});
```

### Test Structure

Each test follows a consistent structure with:

- **Tags**: `@smoke` for categorization
- **Annotations**: Functional descriptions
- **Test Steps**: Detailed step-by-step execution
- **Assertions**: Comprehensive validation

```typescript
test(
  "Test Name",
  {
    tag: "@smoke",
    annotation: [
      {
        type: "functional",
        description: "Detailed test description",
      },
    ],
  },
  async ({ page }) => {
    // Test implementation with test.step blocks
  }
);
```

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.ts` file includes:

- **Browser configurations** for Chromium, Firefox, and WebKit
- **Test timeout** settings
- **Report generation** settings
- **Parallel execution** configuration

### Test Timeouts

- **Default timeout**: 30 seconds
- **Navigation timeout**: 30 seconds
- **Action timeout**: 30 seconds

## 📊 Test Results

### Success Metrics

- **Total Tests**: 51
- **Pass Rate**: 100%
- **Coverage**: All major website components
- **Browsers**: Chromium, Firefox, WebKit

### Test Execution

Tests are executed in parallel using 6 workers for optimal performance. Each test includes:

- Navigation validation
- Element interaction testing
- State verification
- Error handling

## 🧪 Test Examples

### Button Testing

```typescript
await test.step("Step_3 | Click the 'Primary' button | The URL remains on the Buttons page.", async () => {
  await expect(buttonsPage.primaryButton()).toBeVisible();
  await expect(buttonsPage.primaryButton()).toBeEnabled();
  await buttonsPage.clickPrimaryButton();
  await expect(page).toHaveURL("https://formy-project.herokuapp.com/buttons");
});
```

### Form Testing

```typescript
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
```

### File Upload Testing

```typescript
await test.step("Step_3 | Upload a dummy file | The file is uploaded successfully.", async () => {
  await fileUploadPage.uploadFile(filePath);
});
```

## 🔍 Debugging

### Debug Mode

```bash
npx playwright test --debug
```

### Trace Viewer

```bash
npx playwright show-trace trace.zip
```

### Screenshots

Tests automatically capture screenshots on failure in the `test-results/` directory.

## 📝 Best Practices

1. **Page Object Model**: Centralized element management
2. **Test Steps**: Structured test execution with clear descriptions
3. **Comprehensive Assertions**: Beyond simple URL verification
4. **Realistic Navigation**: Simulate actual user behavior
5. **Error Handling**: Graceful failure handling
6. **Maintainable Code**: Clean, readable test structure

## 🚨 Troubleshooting

### Common Issues

1. **Browser Installation**: Ensure Playwright browsers are installed
2. **Timeout Errors**: Check network connectivity and page load times
3. **Element Not Found**: Verify locators and page state
4. **Test Failures**: Review test-results directory for detailed error information

### Debug Commands

```bash
# Install browsers
npx playwright install

# Update browsers
npx playwright install --force

# Check browser status
npx playwright --version
```

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain test step documentation
3. Ensure all tests pass before submitting
4. Follow the established naming conventions

## 📄 License

This project is part of an automation portfolio demonstration.

## 🙏 Acknowledgments

- **Playwright Team**: For the excellent testing framework
- **Formy Project**: For providing the test application
- **Testing Community**: For best practices and patterns

---

**Last Updated**: December 2024  
**Test Count**: 51 tests  
**Coverage**: 100% of available pages  
**Status**: All tests passing ✅
