import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {stepAllure}   from '../helpers/reporters';

export default class MultipleWindows extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Multiple Windows page')
        super.open('windows')
      }

    async linkButton(): Promise<WebdriverIO.Element> {
        return await $('=Click Here')
    }


    // async clickLinkButton(): Promise<void> {
    //     AllureReporter.addStep("Clicking link button")
    //     const button = await this.linkButton();
    //     await button.waitForDisplayed({ timeout: 3000 });
    //     await button.click({skipRelease:true});
    //     expect(await $('h3')).toBePresent()
    // }


    async clickLinkButton(): Promise<void> {
        await stepAllure(
        true,
        true,
        "Checking clicking link button",
        "New window should be opened",
        "1",
        async () => {
            const button = await this.linkButton();
            await button.waitForDisplayed({ timeout: 3000 });
            await button.click({skipRelease:true});
            expect(await $('h3')).toBePresent()
        }
      )
      };

      async switchingWindows(): Promise<void> {
        await stepAllure(
            true,
            true,
            "Checking windows switching",
            "Windows should be switched",
            "2",
           async () => {
            await browser.switchWindow('https://the-internet.herokuapp.com/windows')
            await browser.switchWindow('New Window')
           }
        )
      }
}