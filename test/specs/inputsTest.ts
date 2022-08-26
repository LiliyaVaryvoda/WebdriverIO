import AllureReporter from "@wdio/allure-reporter";
import InputsPageObjects from "../pageObjects/inputsPageObjects";

const inputsPageObjects = new InputsPageObjects();

describe("Inputs test suit", function () {
  before(async function () {
    inputsPageObjects.open();
  });

  it("Inputs test case #1", async function () {
    await inputsPageObjects.setValueInField(10, {
      proceedSteps: true,
      takeScreenshot: true,
    });
    await inputsPageObjects.checkIfFocused({
      proceedSteps: true,
      takeScreenshot: true,
    });
  });
});
