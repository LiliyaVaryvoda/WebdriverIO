// import AllureReporter from "@wdio/allure-reporter";
// import NestedFrames from "../pageObjects/nestedFramesPageObjects";
// const nestedFrames = new NestedFrames()
// import {expect} from 'chai'

// describe('Nested frames test suit', function(){

//     before(async function () {
//         nestedFrames.open()
//       });

//     it('Nested frames test case #1', async function(){
//         await AllureReporter.startStep("Checking nested frames test")
//         await browser.pause(5000)
        
//         //browser.switchToFrame(nestedFrames.leftFrame)
//         //await expect(nestedFrames.leftFrame).toHaveText('LEFT')
//         const leftframebody = await nestedFrames.topFrame.frameLocator('[name="frame-left"]')
//         .locator('body')
//       await expect(leftframebody).toHaveText('LEFT')
//         await AllureReporter.endStep("passed")
//     })
// })
