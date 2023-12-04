import { test } from '@playwright/test';
import {HomePage} from '../pages/home'

test('test', async ({ page }) => {
    const Home = new HomePage(page);
    await Home.visitSite();
    await Home.assertContactFormInfo();     
    await Home.testContactFormValidation();
});