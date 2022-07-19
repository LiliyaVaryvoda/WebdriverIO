import JSAlertsPageObjects from "../pageObjects/JSAlertsPageObjects";
const jSAlertsPageObjects = new JSAlertsPageObjects()

describe('JS alerts test', function(){

    before(async function () {
        jSAlertsPageObjects.open();
      });

    it('JS alert test', async function(){
        await browser.pause(5000)
        await jSAlertsPageObjects.clickAlert()
        await browser.pause(5000)
        await browser.acceptAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You successfully clicked an alert')
    })

    it('JS confirm test', async function(){
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm()
        await browser.pause(5000)
        await browser.acceptAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You clicked: Ok')
    })


    it('JS confirm test', async function(){
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm()
        await browser.pause(5000)
        await browser.dismissAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You clicked: Cancel')
    })
})