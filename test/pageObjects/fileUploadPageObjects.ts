import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import { stepAllure } from "../helpers/reporters";
import { stepOptions } from "../helpers/reporters";
import { LogFile } from "../helpers/reporters";

export default class FileUpload extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    AllureReporter.addStep("Navigating to File upload page");
    super.open("upload");
  }

  async uploadButton(): Promise<WebdriverIO.Element> {
    return await $("#file-upload");
  }

  async submitButton(): Promise<WebdriverIO.Element> {
    return await $("#file-submit");
  }

  async clickUploadButton(
    somepath: string,
    options?: stepOptions
  ): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking upload button",
      "Upload button should be clicked",
      "1",
      async () => {
        const button = await this.uploadButton();
        await button.setValue(somepath);
      }
    );
  }

  async clickSubmitButton(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking submit button",
      "Submit button should be clicked",
      "2",
      async () => {
        const button = await this.submitButton();
        await button.click();
      }
    );
  }
}
