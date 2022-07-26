import RootObject from "./rootObject";
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";


export default class ContextMenu extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        AllureReporter.addStep('Navigating to context menu page')
        super.open('/context_menu')
      }

    async contextMenuField(): Promise<WebdriverIO.Element> {
        return await $('#hot-spot');
    }

    async rightClickOnContextMenu(): Promise<void> {
        AllureReporter.addStep("Clicking right on context menu")
        const right = await this.contextMenuField();
        right.click({ button: 'right', skipRelease:true});
    }

}