import RootObject from "./rootObject";
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";

export default class DropDownPageObjects extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        AllureReporter.addStep('Navigating to dropdown page')
        super.open('dropdown')
      }

    async dropDownElement(): Promise<WebdriverIO.Element> {
        return await $('#dropdown')
    }

    async selectDropDown(text): Promise<void> {
        AllureReporter.addStep("Selecting dropdown")
        const element = await this.dropDownElement();
        element.selectByVisibleText(text)
    }
}