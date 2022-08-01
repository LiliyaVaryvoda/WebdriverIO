import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {expect} from 'chai'

export default class NotificationMessages extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Notification messages page')
        super.open('notification_message_rendered')
      }

    async linkButton(): Promise<WebdriverIO.Element> {
        return await $('#content > div > p > a')
    }


    async clickLinkButton(): Promise<void> {
        AllureReporter.addStep("Clicking link button")
        AllureReporter.addDescription("This is description", 'text')
        const button = await this.linkButton();
        await button.waitForDisplayed({ timeout: 3000 });
        button.click({skipRelease:true});
        AllureReporter.addAttachment(' My Screenshot', await browser.takeScreenshot(),"png")
        AllureReporter.addAttachment("My attachment", "","JSON")
    }

    async checkText(): Promise<void>{
      AllureReporter.addStep("Checking notification text")
      AllureReporter.addDescription("this is description", 'text')
      const messageHeader = await $("#flash")
      await messageHeader.waitForDisplayed({ timeout: 3000 });
      const messageHeaderText = await messageHeader.getText()
      const messages = ["Action successful\n×", "Action unsuccesful, please try again\n×"]
      expect(messageHeaderText).to.be.oneOf(messages)
      AllureReporter.addAttachment(' My Screenshot', await browser.takeScreenshot(),"png")
      AllureReporter.addAttachment("my attachment", "","JSON")
    }
}