import RootObject from './rootObject';
import {stepAllure}   from '../helpers/reporters';
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

async enterEmail(somevalue:string): Promise<void> {
  await stepAllure(
  false,
  true,
  "Checking email entering in the email field",
  "Email should be entered in the email field",
  "1",
  async () => {
    const field = await this.emailField();
    await field.setValue(somevalue);
  }
)
};


async clickRetrieve(): Promise<void> {
  await stepAllure(
  true,
  false,
  "Checking clicking Retrieve button",
  "The button should be clicked",
  "2",
  async () => {
    const button = await this.retrieveButton();
    await button.click();
  }
)
};


async resultMessage(): Promise<void> {
  await stepAllure(
  true,
  true,
  'Checking result message',
  'The result message should be displayed',
  "3",
  async () => {
    const message = await $('h1')
    expect(message).toHaveTextContaining("Internal Server Error")
  }
)
}

}


