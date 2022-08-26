import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import { stepAllure } from "../helpers/reporters";
import { stepOptions } from "../helpers/reporters";
import { LogFile } from "../helpers/reporters";

export default class InputsPageObjects extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    AllureReporter.addStep("Navigating to Inputs page");
    super.open("inputs");
  }

  async numberField(): Promise<WebdriverIO.Element> {
    return await $("input[type=number]");
  }

  async setValueInField(
    somevalue: number,
    options?: stepOptions
  ): Promise<void> {
    await stepAllure(
      options,
      "Checking setting input value in field",
      "Input value should be entered",
      "Input value is entered",
      "1",
      async () => {
        const field = await this.numberField();
        await field.setValue(somevalue);
      }
    );
  }

  async checkIfFocused(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking if field is focused after entering input value",
      "Field should be focused",
      "Field is focused",
      "2",
      async () => {
        const field = await this.numberField();
        expect(field.isFocused());
      }
    );
  }
}
