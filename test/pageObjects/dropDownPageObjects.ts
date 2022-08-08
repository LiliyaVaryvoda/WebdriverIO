import RootObject from "./rootObject";
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";
import {stepAllure}   from '../helpers/reporters';

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
        await stepAllure(
        true,
        true,
        'Checking selecting first dropdown',
        'First dropdown should be selected',
        "1",
        async () => {
          const element = await this.dropDownElement();
          await element.selectByVisibleText("Option 1")
          const elem = await $('option[value="1"]')
          console.log(await elem.isSelected())
        }
      )
      }


      async selectDropDown2(): Promise<void> {
        await stepAllure(
        true,
        true,
        'Checking selecting second dropdown',
        'Second dropdown should be selected',
        "2",
        async () => {
          const element = await this.dropDownElement();
          await element.selectByVisibleText("Option 2")
          const elem = await $('option[value="2"]')
          console.log(await elem.isSelected())
        }
      )
      }
}