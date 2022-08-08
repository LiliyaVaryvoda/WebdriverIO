import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {stepAllure}   from '../helpers/reporters';

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
        await stepAllure(
        true,
        true,
        "Checking entering the element in the field",
        "The element should be entered",
        "1",
        async () => {
            const field = await this.fieldToEnter();
            await field.waitForDisplayed({ timeout: 3000 });
            await field.setValue('/')
            expect(this.result).toHaveTextContaining("SLASH")
        }
      )
      };

}