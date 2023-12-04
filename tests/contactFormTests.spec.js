import { test } from '@playwright/test';
import {HomePage} from '../pages/home'


test.beforeEach(async ({ page }) => {
    const Home = new HomePage(page);
    await Home.visitSite();
  });

test('validationTest', async ({ page }) => {
    const Home = new HomePage(page);    
    await Home.assertContactFormInfo();     
    await Home.testContactFormValidation();
});