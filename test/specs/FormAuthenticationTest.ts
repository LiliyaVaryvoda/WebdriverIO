import AllureReporter from "@wdio/allure-reporter";
import LoginPageObjects from "../pageObjects/FormAuthenticationPO";
const loginPageObjects = new LoginPageObjects()

describe('Form Authentication test suit', function(){

    before(async function () {
        loginPageObjects.open();
      });

    it('Login page test case #1', async function(){
        await AllureReporter.startStep("Checking login page test")
        await browser.pause(5000)
        await loginPageObjects.enterCorrectLogin("tomsmith", "SuperSecretPassword!")
        await loginPageObjects.clickLogin()
        await browser.pause(5000)
        await expect($(".subheader")).toHaveText('Welcome to the Secure Area. When you are done click logout below.')
        await browser.pause(5000)
        await loginPageObjects.clickLogOut()
        await browser.pause(5000)
        await AllureReporter.endStep("passed")
    })
})