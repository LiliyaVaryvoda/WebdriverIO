import RootObject from "./rootObject";
import { expect } from "chai";
import { stepAllure } from "../helpers/reporters";
import { stepOptions } from "../helpers/reporters";
import { LogFile } from "../helpers/reporters";

export default class CheckboxesPageObjects extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    super.open("/checkboxes");
  }

  async checkboxes(): Promise<WebdriverIO.Element> {
    return await $('#checkboxes input[type="checkbox"]');
  }

  async getCheckbox1(): Promise<WebdriverIO.Element> {
    return await $("#checkboxes > input[type=checkbox]:nth-child(1)");
  }

  async clickOnCheckbox1(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Clicking on first checkbox",
      "The button should be clickable",
      "Button is clicked",
      "1",
      async () => {
        const button = await this.getCheckbox1();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click();
      }
    );
  }

  async getCheckbox2(): Promise<WebdriverIO.Element> {
    return await $("#checkboxes > input[type=checkbox]:nth-child(3)");
  }

  async clickOnCheckbox2(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Clicking on second checkbox",
      "The button should be clickable",
      "Button is clicked",
      "2",
      async () => {
        const button = await this.getCheckbox2();
        await button.waitForDisplayed({ timeout: 3000 });
        await button.click();
      }
    );
  }
}
