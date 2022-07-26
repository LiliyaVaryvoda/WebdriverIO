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

    async enterCorrectLogin(a,b) {
        await this.usernameField.setValue(a)
        await this.passwordField.setValue(b)
    }

    async clickLogin(){
        await this.loginBtn.click()
    }

    async clickLogOut(){
        await this.logoutBtn.click()
    }
}