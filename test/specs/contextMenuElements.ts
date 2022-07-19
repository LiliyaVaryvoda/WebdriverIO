
import ContextMenuPageObjects from "../pageObjects/contextMenuPageobjects"
const contextMenuPageObjects = new ContextMenuPageObjects()
import {expect} from 'chai'

describe('Context menu', function(){

    before(async function () {
        contextMenuPageObjects.open();
      });

    it('Click context menu', async function(){
        await browser.pause(5000);
        await contextMenuPageObjects.rightClickOnContextMenu()
        const alertText = await browser.getAlertText();
        await browser.acceptAlert();
        expect(alertText).to.equal('You selected a context menu')
        await browser.pause(6000);
    })
})