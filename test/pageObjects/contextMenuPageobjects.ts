import RootObject from "./rootObject";
import {expect} from 'chai'



export default class ContextMenu extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        super.open('/context_menu')
      }


    get contextMenuField(){
        return $('#hot-spot')
    }


    async rightClickOnContextMenu(){
        this.contextMenuField.click({ button: 'right', skipRelease:true})
    }
}