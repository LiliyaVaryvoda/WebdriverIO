import AllureReporter from "@wdio/allure-reporter";
import JSAlertsPageObjects from "../pageObjects/JSAlertsPO";

const jSAlertsPageObjects = new JSAlertsPageObjects()

describe('JS alerts test suit', function(){

    before(async function () {
        jSAlertsPageObjects.open();
      });

    it('JS alert test case #1', async function(){
        AllureReporter.startStep("Checking alert test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickAlert()
        await browser.pause(5000)
        AllureReporter.endStep("passed")

    })

    it('JS confirm with accept test case #2', async function(){
        AllureReporter.startStep("Checking confirm with accept test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })


    it('JS confirm with decline test case #3', async function(){
        AllureReporter.startStep("Checking confirm with decline test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickConfirm2()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })


    it ('JS prompt test case #4', async function(){
        AllureReporter.startStep("Checking prompt test")
        await browser.pause(5000)
        await jSAlertsPageObjects.clickPrompt()
        await browser.pause(5000)
        AllureReporter.endStep("passed")
    })
})