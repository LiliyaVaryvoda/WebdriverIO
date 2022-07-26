import ForgotPassword from '../pageObjects/forgotPasswordPageObjects';
import AllureReporter from "@wdio/allure-reporter";


const forgotPassword = new ForgotPassword();

describe('Forgot Password test suit', function () {
    before(async function () {
        forgotPassword.open();
    });
    it('Forgot password test case #1', async function () {
        await AllureReporter.startStep("Checking forgot password test")
        await forgotPassword.enterEmail("email@email.com")
        await browser.pause(5000);
        await forgotPassword.clickRetrieve()
        await browser.pause(5000);
        await forgotPassword.resultMessage('Internal Server Error')
        await browser.pause(5000);

    });

})