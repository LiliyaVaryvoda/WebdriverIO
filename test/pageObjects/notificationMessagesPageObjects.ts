import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {expect} from 'chai'
import {stepAllure}   from '../helpers/reporters';

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
        await stepAllure(
        true,
        true,
        "Checking clicking link button",
        "The link button should be clicked",
        "1",
        async () => {
            const button = await this.linkButton();
            await button.waitForDisplayed({ timeout: 3000 });
            button.click({skipRelease:true});
        }
      )
      };


    async checkText(): Promise<void> {
        await stepAllure(
        true,
        true,
        "Checking text results",
        "Text should be displayed",
        "2",
        async () => {
            const messageHeader = await $("#flash")
            await messageHeader.waitForDisplayed({ timeout: 3000 });
            const messageHeaderText = await messageHeader.getText()
            const messages = ["Action successful\n×", "Action unsuccesful, please try again\n×"]
            expect(messageHeaderText).to.be.oneOf(messages)
        }
      )
      };
}