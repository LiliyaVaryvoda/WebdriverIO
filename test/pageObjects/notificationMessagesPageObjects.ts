import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

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
        //return await $("[text()='Click Here']");
    }


    async clickLinkButton(): Promise<void> {
        AllureReporter.addStep("Clicking link button")
        const button = await this.linkButton();
        button.click({skipRelease:true});
    }

}