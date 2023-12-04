import { expect } from '@playwright/test';

//Page objects
const contactFormContainer = '.contact .col-sm-5 > p';
const contactFormSubmitButton = '#submitContact';
const nameField = '[data-testid="ContactName"]';
const emailField = '[data-testid="ContactEmail"]';
const phoneField = '[data-testid="ContactPhone"]';
const subjectField = '[data-testid="ContactSubject"]';
const messageField = '[data-testid="ContactDescription"]';

//Text assertions
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

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    // this.contactFormText = page.locator('.contact .col-sm-5 > p')
    // this.contactFormSubmitButton = page.getByTestId('#submitContact')
    // this.contactFormAlertMessage = page.locator('.alert-danger p')
  }

  async testContactFormValidation() {
    await this.clickSubmit();
    
    for(const text of contactFormValidationMsgs){
      await expect(this.page.getByText(text)).toBeVisible();
    }
  }

  async visitSite() {
    await this.page.goto('https://automationintesting.online/');
  }

  async assertContactFormInfo() {
    await expect(this.page.locator(contactFormContainer)).toContainText(
      contactFormText
    );
  }

  async clickSubmit() {
    await this.page.locator(contactFormSubmitButton).click();
  }

  async sendMessage() {
    await this.page.locator(nameField).fill(contactName);
    await this.page.locator(emailField).fill('fake@fakeemail.com');
    await this.page.locator(phoneField).fill('012345678901');
    await this.page.locator(subjectField).fill('Question');
    await this.page
      .locator(messageField)
      .fill(
        'I have a very important question to ask you about this automation test website, please can you respond'
      );

    await this.clickSubmit();
  }

  async assertMessageSent() {
    await expect(this.page.getByText('Thanks for getting in touch ',contactName ,'!')).toBeVisible();
  }
};
