import { Page, expect, test} from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
dotenv.config();

test('User should be able to login using valid inputs', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.validLogin();
});