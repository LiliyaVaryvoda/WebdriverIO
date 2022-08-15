import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import { stepAllure } from "../helpers/reporters";
import { stepOptions } from "../helpers/reporters";
import { LogFile } from "../helpers/reporters";

export default class JSAlertsPageObjects extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    AllureReporter.addStep("Navigating to JS alerts page");
    super.open("javascript_alerts");
  }

  async alertButton(): Promise<WebdriverIO.Element> {
    return await $(".//button[text()='Click for JS Alert']");
  }

  async confirmButton(): Promise<WebdriverIO.Element> {
    return await $(".//button[text()='Click for JS Confirm']");
  }

  async promptButton(): Promise<WebdriverIO.Element> {
    return await $(".//button[text()='Click for JS Prompt']");
  }

  // async clickAlert(): Promise<void> {
  //     AllureReporter.addStep("Clicking alert button")
  //     const button = await this.alertButton();
  //     await button.waitForDisplayed({ timeout: 3000 });
  //     await button.click({skipRelease:true});
  //     await browser.acceptAlert();
  //     await expect ($("#result")).toHaveText('You successfully clicked an alert')
  // }

  async clickAlert(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking alert button",
      "Alert should appear",
      "1",
      async () => {
        const button = await this.alertButton();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click({ skipRelease: true });
        await browser.acceptAlert();
        await expect($("#result")).toHaveText(
          "You successfully clicked an alert"
        );
      }
    );
  }

  // async clickConfirm(): Promise<void> {
  //     AllureReporter.addStep("Clicking confirm button to accept")
  //     const button = await this.confirmButton();
  //     await button.waitForDisplayed({ timeout: 3000 });
  //     await button.click({skipRelease:true});
  //     await browser.acceptAlert();
  //     await expect ($("#result")).toHaveText('You clicked: Ok')
  // }

  async clickConfirm(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking confirm button to accept alert",
      "Confirm alert should appear",
      "2",
      async () => {
        const button = await this.confirmButton();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click({ skipRelease: true });
        await browser.acceptAlert();
        await expect($("#result")).toHaveText("You clicked: Ok");
      }
    );
  }

  // async clickConfirm2(): Promise<void> {
  //     AllureReporter.addStep("Clicking confirm button to dismiss")
  //     const button = await this.confirmButton();
  //     await button.waitForDisplayed({ timeout: 3000 });
  //     await button.click({skipRelease:true});
  //     await browser.dismissAlert();
  //     await expect ($("#result")).toHaveText('You clicked: Cancel')
  // }

  async clickConfirm2(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking confirm button to dismiss alert",
      "Confirm alert should appear",
      "3",
      async () => {
        const button = await this.confirmButton();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click({ skipRelease: true });
        await browser.dismissAlert();
        await expect($("#result")).toHaveText("You clicked: Cancel");
      }
    );
  }

  // async clickPrompt(): Promise<void> {
  //     AllureReporter.addStep("Clicking prompt button")
  //     const button = await this.promptButton();
  //     await button.waitForDisplayed({ timeout: 3000 });
  //     button.click({skipRelease:true});
  //     await browser.sendAlertText("text");
  //     await browser.acceptAlert();
  //     await expect ($("#result")).toHaveText('You entered: text')
  // }

  async clickPrompt(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking prompt button",
      "Prompt alert should appear",
      "4",
      async () => {
        const button = await this.promptButton();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click({ skipRelease: true });
        await browser.sendAlertText("text");
        await browser.acceptAlert();
        await expect($("#result")).toHaveText("You entered: text");
      }
    );
  }
}
