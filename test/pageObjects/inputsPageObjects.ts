import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class InputsPageObjects extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Inputs page')
        super.open('inputs')
      }

    async numberField(): Promise<WebdriverIO.Element> {
        return await $('input[type=number]');
    }

    async setValueInField(somevalue): Promise<void> {
        AllureReporter.addStep("Setting input value in field")
        const field = await this.numberField();
        field.setValue(somevalue);
    }

    async checkIfFocused(): Promise<void> {
        AllureReporter.addStep("Checking if field is focused after entering input value")
        const field = await this.numberField();
        field.isFocused()
    }
}