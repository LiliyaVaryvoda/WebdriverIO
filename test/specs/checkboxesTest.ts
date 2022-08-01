import CheckboxesPageObjects from "../pageObjects/checkboxesPageObjects";
const checkboxesPageObjects = new CheckboxesPageObjects()
import AllureReporter from "@wdio/allure-reporter";

describe('Checkboxes test suit', function(){

    before(async function () {
        checkboxesPageObjects.open();
      });

    it('Checkboxes test case #1', async function(){
        AllureReporter.startStep("Checking checkboxes test")
        await checkboxesPageObjects.clickOnCheckbox1();
        await checkboxesPageObjects.clickOnCheckbox2();
        AllureReporter.endStep("passed")
    })
})