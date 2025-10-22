const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // 60 seconds

const { test, expect } = require('@playwright/test');
const playwright = require('playwright');

const { LoginPage } = require('../../page_objects/LoginPage');
// Load environment variables from .env.qa file
require('dotenv').config({ path: 'Env' });


Given('I open the OrangeHRM login page', async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.loginPageObj = new LoginPage(this.page);
    await this.loginPageObj.launchURL();
});

When('I enter username and password', async function () {
    await this.loginPageObj.validLogin();


});
When('I click on the login button', async function () {
    // Login is done in previous step
    await this.loginPageObj.clickLoginButton();

});

Then('I should see the dashboard page', async function () {
    await this.loginPageObj.assertLoginSuccess();
});

When('I enter username {string} and password {string}', async function (varUsername, varPassword) {
    await this.loginPageObj.invalidLogin(varUsername, varPassword);
});

Then('I should see an error message containing {string}',async function (varErrorMessage) {
    await this.loginPageObj.assertErrorMessage(varErrorMessage);

});

When('I click on the login button without entering credentials',async function () {
    await this.loginPageObj.clickLoginButton();

});

Then('I should see validation messages {string} for username and password',async function (varValidationMessage) {
    await this.loginPageObj.assertValidationErrorMessage(varValidationMessage);

});


When('I click on the {string} link', async function (linkText) {
    await this.loginPageObj.clickForgotPasswordLink(linkText);

});

Then('I should see the Reset Password page', async function () {
    await this.loginPageObj.verifyResetPasswordPage();
  });


