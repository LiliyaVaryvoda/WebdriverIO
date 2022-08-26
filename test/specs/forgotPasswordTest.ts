import ForgotPassword from "../pageObjects/forgotPasswordPageObjects";
import AllureReporter from "@wdio/allure-reporter";
import { forgotPasswordInfo } from "../data/data";

const forgotPassword = new ForgotPassword();

describe("Forgot Password test suit", function () {
  before(async function () {
    forgotPassword.open();
  });
  it("Forgot password test case #1", async function () {
    await forgotPassword.enterEmail(forgotPasswordInfo.email, {
      proceedSteps: true,
      takeScreenshot: true,
    });
    await forgotPassword.clickRetrieve({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await forgotPassword.resultMessage({
      proceedSteps: true,
      takeScreenshot: true,
    });
  });
});
