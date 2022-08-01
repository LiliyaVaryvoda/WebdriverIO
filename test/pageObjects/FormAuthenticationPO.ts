import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";
import {expect} from 'chai'

export default class LoginPageObjects extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        AllureReporter.addStep('Navigating to Form Authentication : Login Page')
        super.open('login')
      }

    get usernameField(){
        return $("#username")
    }

    get passwordField(){
        return $("#password")
    }

    get loginBtn(){
        return $(".radius")
    }

    get logoutBtn(){
        return $(".button.secondary.radius")
    }

    async enterCorrectLogin(name: string, password : string) {
        AllureReporter.addStep("Entering correct login")
        await this.usernameField.setValue(name)
        await this.passwordField.setValue(password)
    }

    async clickLogin(){
        AllureReporter.addStep("Click login button")
        await this.loginBtn.click()
    }

    async clickLogOut(){
        AllureReporter.addStep("Click log out button")
        await this.logoutBtn.click()
    }
}