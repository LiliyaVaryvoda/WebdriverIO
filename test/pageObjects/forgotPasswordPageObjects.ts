import RootObject from './rootObject';
import AllureReporter from "@wdio/allure-reporter";
import { stepOptions } from '../data/types';
import { step } from '../helpers/logger';

export default class ForgotPassword extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    return super.open('/forgot_password');
  }

async emailField(): Promise<WebdriverIO.Element> {
    return await $("#email");
}

async retrieveButton(): Promise<WebdriverIO.Element>{
    return await $("#form_submit")
}

// async enterEmail(somevalue:string): Promise<void> {
//     AllureReporter.addStep("Entering email in email field")
//     const field = await this.emailField();
//     field.setValue(somevalue);
// }

// async clickRetrieve(): Promise<void> {
//     AllureReporter.addStep("Clicking retreive button")
//     const button = await this.retrieveButton();
//     await button.click();
// }


async enterEmail(somevalue:string ,options?: stepOptions): Promise<void> {
  await step(
    options,
    "My Entering email in email field",
    async () => {
      const field = await this.emailField();
      field.setValue(somevalue);
    },
  );
}

async clickRetrieve(options?: stepOptions): Promise<void> {
  await step(
    options,
    "Clicking retreive button",
    async () => {
      const button = await this.retrieveButton();
      await button.click();
    },
  );
}

async resultMessage(text:string): Promise<void> {
    const message = await $('h1')
    expect(message).toHaveTextContaining(text)
  }
}