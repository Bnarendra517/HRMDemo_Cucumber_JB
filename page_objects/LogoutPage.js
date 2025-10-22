const { expect } = require("allure-playwright");
class LogoutPage
{
    constructor(page)   
    {
        this.page=page;
        this.usernameTextBox=page.locator("//input[@name='username']");
        this.passwordTextBox=page.locator("//input[@name='password']");
        this.loginButton=page.locator("//button[@type='submit']");
        this.userDropdown=page.locator("//p[@class='oxd-userdropdown-name']");
        this.logoutOption=page.locator("//a[text()='Logout']");
    }   
    async clickUserDropdown()
    {
        await this.userDropdown.click();
        console.log("#### Clicked on User Dropdown ####");
    }
    async clickLogout()
    {
        await this.logoutOption.click();
        await this.page.waitForLoadState('networkidle');
        const isLoginVisible = await this.usernameTextBox.isVisible();
        expect(isLoginVisible).toBe(true);
        console.log("#### Logout verified: login page is visible ####");
        console.log("#### Clicked on Logout Option ####");
    }   
}
module.exports={LogoutPage};
