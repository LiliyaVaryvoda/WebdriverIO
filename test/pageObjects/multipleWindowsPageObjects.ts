import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class MultipleWindows extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Multiple Windows page')
        super.open('windows')
      }

    async linkButton(): Promise<WebdriverIO.Element> {
        return await $('=Click Here')
    }


    async clickLinkButton(): Promise<void> {
        AllureReporter.addStep("Clicking link button")
        const button = await this.linkButton();
        button.click({skipRelease:true});
    }

}