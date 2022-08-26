import AllureReporter from "@wdio/allure-reporter";
import MultipleWindows from "../pageObjects/multipleWindowsPageObjects";

const multipleWindows = new MultipleWindows();

describe("Multiple windows test suit", function () {
  before(async function () {
    multipleWindows.open();
  });

  it("Multiple windows test case #1", async function () {
    await multipleWindows.clickLinkButton({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await multipleWindows.switchingWindows({
      proceedSteps: true,
      takeScreenshot: true,
    });
  });
});
