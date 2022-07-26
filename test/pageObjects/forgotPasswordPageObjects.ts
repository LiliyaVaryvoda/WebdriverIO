import RootObject from './rootObject';
import AllureReporter from "@wdio/allure-reporter";


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

async enterEmail(somevalue): Promise<void> {
    AllureReporter.addStep("Entering email in email field")
    const field = await this.emailField();
    field.setValue(somevalue);
}


async clickRetrieve(): Promise<void> {
    AllureReporter.addStep("Clicking retreive button")
    const button = await this.retrieveButton();
    button.click();
}

async resultMessage(text): Promise<void> {
    const message = await $('h1')
    await expect(message).toHaveTextContaining(text)
  }

}