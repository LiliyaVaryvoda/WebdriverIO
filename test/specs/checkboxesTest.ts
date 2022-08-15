import CheckboxesPageObjects from "../pageObjects/checkboxesPageObjects";
const checkboxesPageObjects = new CheckboxesPageObjects();
import AllureReporter from "@wdio/allure-reporter";

describe("Checkboxes test suit", function () {
  before(async function () {
    checkboxesPageObjects.open();
  });

  it("Checkboxes test case #1", async function () {
    await checkboxesPageObjects.clickOnCheckbox1({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
    await checkboxesPageObjects.clickOnCheckbox2({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });
});
