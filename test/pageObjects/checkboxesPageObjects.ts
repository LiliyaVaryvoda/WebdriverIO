import RootObject from "./rootObject";
import {expect} from 'chai'
import { isThisTypeNode } from "typescript";

export default class CheckboxesPageObjects extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        super.open('/checkboxes')
      }

    async checkboxes(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes input[type="checkbox"]')
    }

    // async checkbox1(): Promise<WebdriverIO.Element> {
    //     return await this.checkboxes.get(0);
    // }


    async getCheckbox1(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type=checkbox]:nth-child(1)');
        }


    async clickOnCheckbox1(): Promise<void> {
        const button = await this.getCheckbox1();
        button.click();
    }


    async getCheckbox2(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type=checkbox]:nth-child(3)');
        }

        
    async clickOnCheckbox2(): Promise<void> {
        const button = await this.getCheckbox2();
        button.click();
    }


    async verifyElementIsDisplayed(element: WebdriverIO.Element): Promise<void> {
    expect(await element.isDisplayed()).to.be.true;
  }



  
}