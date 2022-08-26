import AllureReporter from "@wdio/allure-reporter";
import NotificationMessages from "../pageObjects/notificationMessagesPageObjects";
const notificationMessages = new NotificationMessages();

describe("Notification Messages test suit", function () {
  before(async function () {
    notificationMessages.open();
  });

  it("Notification Messages test case #1", async function () {
    await notificationMessages.clickLinkButton({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await notificationMessages.checkText({
      proceedSteps: true,
      takeScreenshot: true,
    });
  });
});
