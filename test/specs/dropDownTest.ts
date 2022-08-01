import DropDownPageObjects from "../pageObjects/dropDownPageObjects";
const dropDownPageObjects = new DropDownPageObjects()
import AllureReporter from "@wdio/allure-reporter";


describe('DropDown Test suit', function(){

    before(async function () {
        dropDownPageObjects.open();
      });

    it('Dropdown test case #1', async function(){
        AllureReporter.startStep("Checking dropdown test")
        await browser.pause(5000)
        await dropDownPageObjects.selectDropDown1()
        await browser.pause(5000)
        await dropDownPageObjects.selectDropDown2()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })
})