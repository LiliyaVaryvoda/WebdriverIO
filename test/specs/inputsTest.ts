import AllureReporter from "@wdio/allure-reporter";
import InputsPageObjects from "../pageObjects/inputsPageObjects";

const inputsPageObjects = new InputsPageObjects()

describe('Inputs test suit', function(){

    before(async function () {
        inputsPageObjects.open();
      });

    it('Inputs test case #1', async function(){
        AllureReporter.startStep("Checking inputs test")
        await inputsPageObjects.setValueInField(10)
        await inputsPageObjects.checkIfFocused()
        AllureReporter.endStep("passed")
    })

})