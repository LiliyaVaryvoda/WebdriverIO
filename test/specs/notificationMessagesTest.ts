import AllureReporter from "@wdio/allure-reporter";
import NotificationMessages from "../pageObjects/notificationMessagesPageObjects";
const notificationMessages = new NotificationMessages()
import {expect} from 'chai'

describe('Notification Messages test suit', function(){

    before(async function () {
        notificationMessages.open();
      });

    it('Multiple windows test case #1', async function(){
        await AllureReporter.startStep("Checking notification messages test")
        await browser.pause(5000)
        await notificationMessages.clickLinkButton()
        await browser.pause(5000)
        const messageHeader = await $("#flash")
        const messageHeaderText = await messageHeader.getText()
        const messages = ["Action successful\n×", "Action unsuccesful, please try again\n×"]
        expect(messageHeaderText).to.be.oneOf(messages)
        await AllureReporter.endStep("passed")
    })
})