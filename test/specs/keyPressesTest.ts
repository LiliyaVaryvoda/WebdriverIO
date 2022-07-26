// import AllureReporter from "@wdio/allure-reporter";
// import KeysPresses from "../pageObjects/keyPressesPageObjects";

// const keysPresses = new KeysPresses()

// describe('Key presses test suit', function(){

//     before(async function () {
//         keysPresses.open();
//       });

//     it('Key presses test case #1', async function(){
//         await AllureReporter.startStep("Checking key presses test")
//         await browser.pause(5000)
//         await keysPresses.enterElement()
//         await browser.pause(5000)
//         await expect(keysPresses.result).toHaveTextContaining("SLASH")
//         await AllureReporter.endStep("passed")
//     })
// })