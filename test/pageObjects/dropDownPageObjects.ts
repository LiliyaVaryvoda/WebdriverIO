import RootObject from "./rootObject";
import {expect} from 'chai'

export default class DropDownPageObjects extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        super.open('dropdown')
      }

    get dropDownElement(){
        return $("#dropdown")
    }
}