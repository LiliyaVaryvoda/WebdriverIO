import RootObject from "./rootObject";
import {expect} from 'chai'

export default class JSAlertsPageObjects extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        super.open('javascript_alerts')
      }

    get alertButton(){
        return $("#content > div > ul > li:nth-child(1) > button")
    }

    get confirmButton(){
        return $("#content > div > ul > li:nth-child(2) > button")
    }

    get loginBtn(){
        return $(".radius")
    }

    async clickAlert() {
        await this.alertButton.click({skipRelease:true})
    }

    async clickConfirm(){
        await this.confirmButton.click({skipRelease:true})
    }
}