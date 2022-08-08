import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {stepAllure}   from '../helpers/reporters';

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


    async setValueInField(somevalue:number): Promise<void> {
        await stepAllure(
        true,
        true,
        "Checking setting input value in field",
        "Input value should be entered",
        "1",
        async () => {
            const field = await this.numberField();
            await field.setValue(somevalue);
        }
      )
      };

    async checkIfFocused(): Promise<void> {
        await stepAllure(
        true,
        true,
        "Checking if field is focused after entering input value",
        "Field should be focused",
        "2",
        async () => {
            const field = await this.numberField();
            expect(field.isFocused())
        }
      )
      };
}