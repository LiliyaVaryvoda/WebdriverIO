import DropDownPageObjects from "../pageObjects/dropDownPageObjects";
const dropDownPageObjects = new DropDownPageObjects();
import AllureReporter from "@wdio/allure-reporter";

describe("DropDown Test suit", function () {
  before(async function () {
    dropDownPageObjects.open();
  });

  it("Dropdown test case #1", async function () {
    await browser.pause(5000);
    await dropDownPageObjects.selectDropDown1({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
    await dropDownPageObjects.selectDropDown2({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });
});
