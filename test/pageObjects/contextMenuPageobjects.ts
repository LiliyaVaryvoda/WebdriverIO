import RootObject from "./rootObject";
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";
import {stepAllure}   from '../helpers/reporters';


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
        await stepAllure(
        true,
        true,
        'Checking clicking right to open context menu',
        'Context menu should be opened',
        "1",
        async () => {
            const right = await this.contextMenuField();
            await right.click({ button: 'right', skipRelease:true});
        }
      )
      }


      async verifyContextMenu(): Promise<void> {
        await stepAllure(
        true,
        true,
        'Checking alert after opening context menu',
        'Alert should be opened',
        "2",
        async () => {
            const alertText = await browser.getAlertText();
            await browser.acceptAlert();
            await browser.pause(5000)
            expect(alertText).to.equal('You selected a context menu')
        }
      )
      }

}