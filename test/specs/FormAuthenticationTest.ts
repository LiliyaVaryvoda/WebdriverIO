import AllureReporter from "@wdio/allure-reporter";
import LoginPageObjects from "../pageObjects/FormAuthenticationPO";
import { loginInfo } from "../data/data";
const loginPageObjects = new LoginPageObjects();

describe("Form Authentication test suit", function () {
  before(async function () {
    loginPageObjects.open();
  });

  it("Login page test case #1", async function () {
    await browser.pause(5000);
    await loginPageObjects.enterCorrectLogin(
      loginInfo.login,
      loginInfo.password,
      {
        proceedSteps: true,
        takeScreenshot: true,
      }
    );
    await browser.pause(5000);
    await loginPageObjects.clickLogin({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
    await loginPageObjects.clickLogOut({
      proceedSteps: true,
      takeScreenshot: true,
    });
  });
});
