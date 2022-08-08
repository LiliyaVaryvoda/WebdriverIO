import RootObject from "./rootObject";
import {expect} from 'chai'
import {step}  from '../helpers/logger';

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


    async getCheckbox1(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type=checkbox]:nth-child(1)');
        }



        async clickOnCheckbox1(): Promise<void> {
          await step(
            false,
            true,
            'Clicking on first checkbox',
            'The button should be clickable',
            "1",
            async () => {
              const button = await this.getCheckbox1();
              await button.waitForDisplayed({ timeout: 3000 });
              await button.click();
            },
          );
        }



    async getCheckbox2(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type=checkbox]:nth-child(3)');
        }


        async clickOnCheckbox2(): Promise<void> {
          await step(
            true,
            false,
            'Clicking on second checkbox',
            'The button should be clickable',
            "2",
            async () => {
              const button = await this.getCheckbox2();
              await button.waitForDisplayed({ timeout: 3000 });
              await button.click();
            },
          );
        }
  
}