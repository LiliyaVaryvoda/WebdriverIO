import AllureReporter from "@wdio/allure-reporter";
import JSAlertsPageObjects from "../pageObjects/JSAlertsPO";

const jSAlertsPageObjects = new JSAlertsPageObjects();

describe("JS alerts test suit", function () {
  before(async function () {
    jSAlertsPageObjects.open();
  });

  it("JS alert test case #1", async function () {
    await browser.pause(5000);
    await jSAlertsPageObjects.clickAlert({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });

  it("JS confirm with accept test case #2", async function () {
    await browser.pause(5000);
    await jSAlertsPageObjects.clickConfirm({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });

  it("JS confirm with decline test case #3", async function () {
    await browser.pause(5000);
    await jSAlertsPageObjects.clickConfirm2({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });

  it("JS prompt test case #4", async function () {
    await browser.pause(5000);
    await jSAlertsPageObjects.clickPrompt({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });
});
