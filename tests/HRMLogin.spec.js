const{test,expect}=require('@playwright/test');
const {LoginPage}=require('../page_objects/LoginPage');

test('HRM Login Test',async({page})=>
{
    const loginPage=new LoginPage(page);        
    await loginPage.launchURL();
    await loginPage.validLogin();
    await loginPage.clickLoginButton();
    await loginPage.assertLoginSuccess();
});