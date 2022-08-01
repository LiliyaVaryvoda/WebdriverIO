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

    async selectDropDown1(): Promise<void> {
        AllureReporter.addStep("Selecting dropdown 1")
        const element = await this.dropDownElement();
        await element.selectByVisibleText("Option 1")
        const elem = await $('option[value="1"]')
        console.log(await elem.isSelected())
    }

    async selectDropDown2(): Promise<void> {
        AllureReporter.addStep("Selecting dropdown 2")
        const element = await this.dropDownElement();
        await element.selectByVisibleText("Option 2")
        const elem2 = await $('option[value="2"]')
        console.log(await elem2.isSelected())
    }
}