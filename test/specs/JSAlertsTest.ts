import AllureReporter from "@wdio/allure-reporter";
import JSAlertsPageObjects from "../pageObjects/JSAlertsPO";

const jSAlertsPageObjects = new JSAlertsPageObjects()

describe('JS alerts test suit', function(){

    before(async function () {
        jSAlertsPageObjects.open();
      });

    it('JS alert test case #1', async function(){
        await AllureReporter.startStep("Checking alert test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickAlert()
        await browser.pause(5000)
        await browser.acceptAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You successfully clicked an alert')
        await AllureReporter.endStep("passed")

    })

    it('JS confirm with accept test case #2', async function(){
        await AllureReporter.startStep("Checking confirm with accept test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm()
        await browser.pause(5000)
        await browser.acceptAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You clicked: Ok')
        await AllureReporter.endStep("passed")
    })


    it('JS confirm with decline test case #3', async function(){
        await AllureReporter.startStep("Checking confirm with decline test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm()
        await browser.pause(5000)
        await browser.dismissAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You clicked: Cancel')
        await AllureReporter.endStep("passed")
    })


    it ('JS prompt test case #4', async function(){
        await AllureReporter.startStep("Checking prompt test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickPrompt()
        await browser.pause(5000)
        await browser.sendAlertText("text");
        await browser.pause(5000)
        await browser.acceptAlert();
        await browser.pause(5000)
        await expect ($("#result")).toHaveText('You entered: text')
        await AllureReporter.endStep("passed")
    })
})