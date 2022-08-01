import AllureReporter from "@wdio/allure-reporter";
import JSAlertsPageObjects from "../pageObjects/JSAlertsPO";

const jSAlertsPageObjects = new JSAlertsPageObjects()

describe('JS alerts test suit', function(){

    before(async function () {
        jSAlertsPageObjects.open();
      });

    it('JS alert test case #1', async function(){
        AllureReporter.startStep("Checking alert test")
        await jSAlertsPageObjects.clickAlert()
        AllureReporter.endStep("passed")

    })

    it('JS confirm with accept test case #2', async function(){
        AllureReporter.startStep("Checking confirm with accept test")
        await jSAlertsPageObjects.clickConfirm()
        AllureReporter.endStep("passed")
    })


    it('JS confirm with decline test case #3', async function(){
        AllureReporter.startStep("Checking confirm with decline test")
        await jSAlertsPageObjects.clickConfirm2()
        AllureReporter.endStep("passed")
    })


    it ('JS prompt test case #4', async function(){
        AllureReporter.startStep("Checking prompt test")
        await jSAlertsPageObjects.clickPrompt()
        AllureReporter.endStep("passed")
    })
})