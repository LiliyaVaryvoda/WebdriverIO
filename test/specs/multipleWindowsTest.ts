import AllureReporter from "@wdio/allure-reporter";
import MultipleWindows from "../pageObjects/multipleWindowsPageObjects";

const multipleWindows = new MultipleWindows()

describe('Multiple windows test suit', function(){

    before(async function () {
        multipleWindows.open();
      });

    it('Multiple windows test case #1', async function(){
        await AllureReporter.startStep("Checking multiple windows test")
        await browser.pause(5000)
        await multipleWindows.clickLinkButton()
        await browser.pause(5000)
        await expect(await $('h3')).toBePresent()
        await browser.pause(5000)
        await browser.switchWindow('https://the-internet.herokuapp.com/windows')
        await browser.pause(5000)
        await browser.switchWindow('New Window')
        await browser.pause(5000)
        await AllureReporter.endStep("passed")
    })
})