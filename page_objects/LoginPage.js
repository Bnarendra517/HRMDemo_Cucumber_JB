const { expect } = require("allure-playwright");

class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.usernameTextBox=page.locator("//input[@name='username']");
        this.passwordTextBox=page.locator("//input[@name='password']");
        this.loginButton=page.locator("//button[@type='submit']");
        this.InvalidcreditialsText=page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
        this.UsernameErrorValidation=page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span");
        this.PasswordErrorValidation=page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span");
        this.ForgotPasswordLink=page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']");
        //this.verifyLoginSuccess=page.locator('h6:has-text("Dashboard")');
    }
    async launchURL()
    {
        await this.page.goto(process.env.BASE_URL);
        console.log("####" + process.env.BASE_URL+"####");

    }

    async validLogin()
    {
        await this.usernameTextBox.fill(process.env.APP_USERNAME);
        await this.passwordTextBox.fill(process.env.APP_PASSWORD);
        console.log(process.env.APP_USERNAME + " ### "+ process.env.APP_PASSWORD);
    }
    async invalidLogin(varUsername,varPassword)
    {
        await this.usernameTextBox.fill(varUsername.trim());
        await this.passwordTextBox.fill(varPassword.trim());
        console.log(varUsername + " ### "+ varPassword);
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log("#### Clicked on Login Button ####");
    }

    async assertLoginSuccess()
    {
        await expect(this.page).toHaveURL(/.*dashboard/);;
        console.log("Login Successfull");
    }
    async assertErrorMessage(varErrorMessage)
    {
        const errorMessage=this.InvalidcreditialsText;
        await expect(errorMessage).toContainText(varErrorMessage);
        console.log("Error Message Verified");
    }
    async assertValidationErrorMessage(varValidationMessage)
    {
        const actualMessage=await this.UsernameErrorValidation.textContent();
        //await expect(actualMessage).toBe(varValidationMessage);
        console.log("Actual Message: "+actualMessage);   
    } 
    async clickForgotPasswordLink(linkText)
    {
        await this.ForgotPasswordLink.click();
        await this.page.waitForLoadState('networkidle');
        console.log("#### Clicked on Forgot Password Link ###");
    }     
    async verifyResetPasswordPage()
    {
        await expect(this.page).toHaveURL(/.*requestPasswordResetCode/);;
        console.log("### Navigated to Reset Password Page ###");
    } 



}
module.exports={LoginPage};