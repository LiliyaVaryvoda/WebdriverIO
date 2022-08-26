import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import { expect } from "chai";
import { stepAllure } from "../helpers/reporters";
import { stepOptions } from "../helpers/reporters";
import { LogFile } from "../helpers/reporters";

export default class LoginPageObjects extends RootObject {
  constructor() {
    super();
  }

  open(): void {
    AllureReporter.addStep("Navigating to Form Authentication : Login Page");
    super.open("login");
  }

  get usernameField() {
    return $("#username");
  }

  get passwordField() {
    return $("#password");
  }

  get loginBtn() {
    return $(".radius");
  }

  get logoutBtn() {
    return $(".button.secondary.radius");
  }

  async enterCorrectLogin(
    name: string,
    password: string,
    options?: stepOptions
  ): Promise<void> {
    await stepAllure(
      options,
      "Checking entering correct login info",
      "Login info should be entered",
      "Login info is enterted",
      "1",
      async () => {
        await this.usernameField.setValue(name);
        await this.passwordField.setValue(password);
      }
    );
  }

  async clickLogin(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking login button",
      "Login button should be clicked",
      "Login button is clicked",
      "2",
      async () => {
        await this.loginBtn.click();
        //await expect($(".subheader")).toHaveTextContaining('Welcome to the Secure Area. When you are done click logout below.')
      }
    );
  }

  async clickLogOut(options?: stepOptions): Promise<void> {
    await stepAllure(
      options,
      "Checking clicking logout button",
      "Logout button should be clicked",
      "Log out button is clicked",
      "3",
      async () => {
        await this.logoutBtn.click();
      }
    );
  }
}
