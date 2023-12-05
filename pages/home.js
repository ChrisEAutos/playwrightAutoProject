import { expect } from '@playwright/test';

//Config
const baseUrl = 'https://automationintesting.online/';

//Page objects
const contactFormContainer = '.contact .col-sm-5 > p';
const contactFormSubmitButton = '#submitContact';
const validationErrorMsg = '.alert-danger p';
const nameField = '[data-testid="ContactName"]';
const emailField = '[data-testid="ContactEmail"]';
const phoneField = '[data-testid="ContactPhone"]';
const subjectField = '[data-testid="ContactSubject"]';
const messageField = '[data-testid="ContactDescription"]';

//Text assertions / Inputs
const contactFormValidationMsgs = [
  'Phone must be between 11 and 21 characters.',
  'Phone may not be blank',
  'Message must be between 20 and 2000 characters.',
  'Message may not be blank',
  'Email may not be blank',
  'Subject must be between 5 and 100 characters.',
  'Subject may not be blank',
  'Name may not be blank',
];

const contactFormText = [
  'Shady Meadows B&B',
  'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S',
  '012345678901',
  'fake@fakeemail.com',
];

const contactName = 'AutoMan Testing';

class HomePage {
  constructor(page) {
    this.page = page;
  }

  //Triggers the validation error message as data is missing from the fields.
  async testContactFormValidation() {
    await this.clickSubmit();

    // For each item in the contactFormValidationMsgs array we assert that the expected message
    // is shown to the user.
    for (const text of contactFormValidationMsgs) {
      await expect(this.page.getByText(text)).toBeVisible();
    }
  }

  //Navigates the browser to the test site and asserts the url is as expected.
  async visitSite() {
    await this.page.goto(baseUrl);
    await expect(this.page).toHaveURL(baseUrl);
  }

  //Uses an array to assert that the contact details are present.
  async assertContactFormInfo() {
    await expect(this.page.locator(contactFormContainer)).toContainText(
      contactFormText
    );
  }

  //Asserts that the validation error message is not present then clicks
  //the submit button.
  async clickSubmit() {
    await expect(this.page.locator(validationErrorMsg)).toBeHidden();
    await this.page.locator(contactFormSubmitButton).click();
  }

  //Fills in the contact form with mandatory data then submits the message.
  async sendMessage() {
    await this.page.locator(nameField).fill(contactName);
    await this.page.locator(emailField).fill(contactFormText[3]);
    await this.page.locator(phoneField).fill(contactFormText[2]);
    await this.page.locator(subjectField).fill(contactFormText[0]);
    await this.page.locator(messageField).fill(contactFormText[1]);

    await this.clickSubmit();
  }

  //Asserts that the message was sent successfully via the UI.
  async assertMessageSent() {
    await expect(
      this.page.getByText('Thanks for getting in touch ', contactName, '!')
    ).toBeVisible();
  }
}

export default HomePage;
