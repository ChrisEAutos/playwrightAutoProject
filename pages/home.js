import { test, expect } from "@playwright/test";

//POM
let contactFormContainer = ".contact .col-sm-5 > p";
let contactFormSubmitButton = "#submitContact";
let contactFormAlertMessage = ".alert-danger p";

//Text assertions
let contactFormValidationMsgs = [
  "Phone must be between 11 and 21 characters.",
  "Phone may not be blank",
  "Message must be between 20 and 2000 characters.",
  "Message may not be blank",
  "Email may not be blank",
  "Subject must be between 5 and 100 characters.",
  "Subject may not be blank",
  "Name may not be blank"
];

let contactFormText = [
    'Shady Meadows B&B',
    'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S',
    '012345678901',
    'fake@fakeemail.com'
];



exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    // this.contactFormText = page.locator('.contact .col-sm-5 > p')
    // this.contactFormSubmitButton = page.getByTestId('#submitContact')
    // this.contactFormAlertMessage = page.locator('.alert-danger p')
  }

  async testContactFormValidation() {
    await this.page.locator(contactFormSubmitButton).click();
    // await expect(this.page.locator(contactFormAlertMessage)).toContainText(
    //   contactFormValidationMsgs
    // );
    await expect(this.page.locator(contactFormAlertMessage)).toContainText(['Phone must be between 11 and 21 characters.']);
  }

  async visitSite() {
    await this.page.goto("https://automationintesting.online/");
  }

  async assertContactFormInfo() {
    await expect(this.page.locator(contactFormContainer)).toContainText(contactFormText);
  }
};
