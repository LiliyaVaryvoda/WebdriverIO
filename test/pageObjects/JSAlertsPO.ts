import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class JSAlertsPageObjects extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to JS alerts page')
        super.open('javascript_alerts')
      }

    async alertButton(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Alert']");
    }
  
    async confirmButton(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Confirm']");
    }

    async promptButton(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Prompt']");
    }

    async clickAlert(): Promise<void> {
        AllureReporter.addStep("Clicking alert button")
        const button = await this.alertButton();
        button.click({skipRelease:true});
    }

    async clickConfirm(): Promise<void> {
        AllureReporter.addStep("Clicking confirm button")
        const button = await this.confirmButton();
        button.click({skipRelease:true});
    }

    async clickPrompt(): Promise<void> {
        AllureReporter.addStep("Clicking prompt button")
        const button = await this.promptButton();
        button.click({skipRelease:true});
    }
}