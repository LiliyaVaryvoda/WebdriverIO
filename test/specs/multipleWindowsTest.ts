import AllureReporter from "@wdio/allure-reporter";
import MultipleWindows from "../pageObjects/multipleWindowsPageObjects";

const multipleWindows = new MultipleWindows()

describe('Multiple windows test suit', function(){

    before(async function () {
        multipleWindows.open();
      });

    it('Multiple windows test case #1', async function(){
        AllureReporter.startStep("Checking multiple windows test")
        await multipleWindows.clickLinkButton()
        await browser.switchWindow('https://the-internet.herokuapp.com/windows')
        await browser.switchWindow('New Window')
        AllureReporter.endStep("passed")
    })
})