import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor (private page: Page) {}
    async navigate()
    {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async validLogin()
    {
        await this.page.fill('#user-name', process.env.USER!);
        await this.page.fill('#password', process.env.PASSWORD!);
        await this.page.locator('#login-button').click();

        // Assert if the user is redirected to the default landing page
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }  
    async invalidLogin()
    {
        // Invalid username
        await this.page.fill('#user-name', 'Test');
        await this.page.fill('#password', process.env.PASSWORD!);
        await this.page.locator('#login-button').click();
        await this.checkInvalidInputError();
        // Invalid password
        await this.clearInputFields();
        await this.page.fill('#user-name', process.env.USER!);
        await this.page.fill('#password', 'Test');
        await this.page.locator('#login-button').click();
        await this.checkInvalidInputError();
        // Invalid username & password
        await this.clearInputFields();
        await this.page.fill('#user-name', 'Test');
        await this.page.fill('#password', 'Test');
        await this.page.locator('#login-button').click();
        await this.checkInvalidInputError();
    } 
    async blankLogin()
    {
        // Blank username and password
        await this.page.locator('#login-button').click();
        await this.checkBlankUserError();
        // Blank username
        await this.page.fill('#password', process.env.PASSWORD!);
        await this.page.locator('#login-button').click();
        await this.checkBlankUserError();
        // Blank password
        await this.clearInputFields();
        await this.page.fill('#user-name', process.env.USER!);
        await this.page.locator('#login-button').click();
        await this.checkBlankPassError();
    }
    async clearInputFields()
    {
        await this.page.fill('#user-name', '');
        await this.page.fill('#password', '');
    }
    async checkInvalidInputError()
    {
        await expect(this.page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    }
    async checkBlankUserError()
    {
        await expect(this.page.getByText('Epic sadface: Username is required')).toBeVisible();
    }
    async checkBlankPassError()
    {
        await expect(this.page.getByText('Epic sadface: Password is required')).toBeVisible();
    }
} 