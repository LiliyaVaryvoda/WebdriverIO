import ContextMenuPageObjects from "../pageObjects/contextMenuPageobjects"
const contextMenuPageObjects = new ContextMenuPageObjects()
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";

describe('Context menu test suit', function(){

    before(async function () {
        contextMenuPageObjects.open();
      });

    it('Context menu test case #1', async function(){
        await AllureReporter.startStep("Checking context menu test")
        await browser.pause(5000);
        await contextMenuPageObjects.rightClickOnContextMenu()
        const alertText = await browser.getAlertText();
        await browser.acceptAlert();
        expect(alertText).to.equal('You selected a context menu')
        await browser.pause(6000);
        await AllureReporter.endStep("passed")
    })
})