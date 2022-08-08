import AllureReporter from "@wdio/allure-reporter";
import LoginPageObjects from "../pageObjects/FormAuthenticationPO";
import {loginInfo} from "../data/data"
const loginPageObjects = new LoginPageObjects()

describe('Form Authentication test suit', function(){

    before(async function () {
        loginPageObjects.open();
      });

    it('Login page test case #1', async function(){
        AllureReporter.startStep("Checking login page test")
        await browser.pause(5000)
        await loginPageObjects.enterCorrectLogin(loginInfo.login, loginInfo.password)
        await browser.pause(5000)
        await loginPageObjects.clickLogin()
        await browser.pause(5000)
        await loginPageObjects.clickLogOut()
        AllureReporter.endStep("passed")
    })
})