import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class KeyPresses extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Keys presses page')
        super.open('key_presses')
      }

    async fieldToEnter(): Promise<WebdriverIO.Element> {
        return await $('#target')
    }

    async result(): Promise<WebdriverIO.Element> {
        return await $('#result')
    }


    async enterElement(): Promise<void> {
        AllureReporter.addStep("Enter element in field")
        const field = await this.fieldToEnter();
        await field.waitForDisplayed({ timeout: 3000 });
        await field.setValue('/')
        expect(this.result).toHaveTextContaining("SLASH")
    }

}