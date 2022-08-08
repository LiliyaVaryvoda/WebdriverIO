import ContextMenuPageObjects from "../pageObjects/contextMenuPageobjects"
const contextMenuPageObjects = new ContextMenuPageObjects()
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";

describe('Context menu test suit', function(){

    before(async function () {
        contextMenuPageObjects.open();
      });

    it('Context menu test case #1', async function(){
        AllureReporter.startStep("Checking context menu test")
        await browser.pause(5000)
        await contextMenuPageObjects.rightClickOnContextMenu()
        await browser.pause(5000)
        const alertText = await browser.getAlertText();
        await browser.acceptAlert();
        await browser.pause(5000)
        expect(alertText).to.equal('You selected a context menu')
        AllureReporter.endStep("passed")
    })
})