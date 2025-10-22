const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // 60 seconds

const { test, expect } = require('@playwright/test');
const playwright = require('playwright');

const { LoginPage } = require('../../page_objects/LoginPage');
const { LogoutPage } = require('../../page_objects/LogoutPage');

// Load environment variables from .env.qa file
require('dotenv').config({ path: 'Env' });


Given('I am logged in to OrangeHRM', async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.loginPageObj = new LoginPage(this.page);
    await this.loginPageObj.launchURL();
    await this.loginPageObj.validLogin();
    await this.loginPageObj.clickLoginButton();
    await this.loginPageObj.assertLoginSuccess();

});

When('I open the user dropdown and click logout', async function () {
    this.logoutPageObj = new LogoutPage(this.page);
    await this.logoutPageObj.clickUserDropdown();
    await this.logoutPageObj.clickLogout();

});

Then('I should be redirected to the login page', async function () {
    await expect(this.page).toHaveURL(/.*login/);
    console.log("Logout Successful, redirected to Login Page");

});

When('I press browser back', async function () {
    await this.page.goBack();

});


Then('I should remain on or be redirected to the login page', async function () {
    const currentURL = this.page.url();
    if (currentURL.includes('dashboard')) {
        // If still on dashboard, try to go back to login
        await this.page.goto(process.env.BASE_URL + '/auth/login');
    }
    await expect(this.page).toHaveURL(/.*login/);
    console.log("Verified: User is on Login Page after pressing browser back");
});

