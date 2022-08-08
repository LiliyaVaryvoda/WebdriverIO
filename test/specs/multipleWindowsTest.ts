import AllureReporter from "@wdio/allure-reporter";
import MultipleWindows from "../pageObjects/multipleWindowsPageObjects";

const multipleWindows = new MultipleWindows()

describe('Multiple windows test suit', function(){

    before(async function () {
        multipleWindows.open();
      });

    it('Multiple windows test case #1', async function(){
        AllureReporter.startStep("Checking multiple windows test")
        await browser.pause(5000)
        await multipleWindows.clickLinkButton()
        await browser.pause(5000)
        await multipleWindows.switchingWindows()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })
})