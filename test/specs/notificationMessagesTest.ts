import AllureReporter from "@wdio/allure-reporter";
import NotificationMessages from "../pageObjects/notificationMessagesPageObjects";
const notificationMessages = new NotificationMessages()


describe('Notification Messages test suit', function(){

    before(async function () {
        notificationMessages.open();
      });

    it('Notification Messages test case #1', async function(){
        AllureReporter.startStep("Checking notification messages test")
        await notificationMessages.clickLinkButton()
        await browser.pause(5000)
        await notificationMessages.checkText()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })
})