import AllureReporter from "@wdio/allure-reporter";
import FileUpload from "../pageObjects/fileUploadPageObjects";
const fileUpload = new FileUpload();
import { expect } from "chai";
const path = require("path");

describe("File upload test suit", function () {
  before(async function () {
    fileUpload.open();
  });

  it("File upload test case #1", async function () {
    const filePath = "C:/Users/Lilia_Varyvoda/Desktop/epam.png";
    await browser.pause(5000);
    const remoteFilePath = await browser.uploadFile(filePath);
    await browser.pause(5000);
    await fileUpload.clickUploadButton(remoteFilePath, {
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
    await fileUpload.clickSubmitButton({
      proceedSteps: true,
      takeScreenshot: true,
    });
    await browser.pause(5000);
  });
});
