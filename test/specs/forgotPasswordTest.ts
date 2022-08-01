import ForgotPassword from '../pageObjects/forgotPasswordPageObjects';
import AllureReporter from "@wdio/allure-reporter";
import {forgotPasswordInfo} from "../data/data"


const forgotPassword = new ForgotPassword();

describe('Forgot Password test suit', function () {
    before(async function () {
        forgotPassword.open();
    });
    it('Forgot password test case #1', async function () {
        AllureReporter.startStep("Checking forgot password test")
        await forgotPassword.enterEmail(forgotPasswordInfo.email)
        await forgotPassword.clickRetrieve()
        await forgotPassword.resultMessage(forgotPasswordInfo.textResult)
        AllureReporter.endStep("passed")
    });

})