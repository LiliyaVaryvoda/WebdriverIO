import AllureReporter from "@wdio/allure-reporter";
import FileUpload from "../pageObjects/fileUploadPageObjects";
const fileUpload = new FileUpload()
import {expect} from 'chai'
const path = require('path');


describe('File upload test suit', function(){

    before(async function () {
        fileUpload.open()
      });

    it('File upload test case #1', async function(){
        await AllureReporter.startStep("Checking file upload test")
        const filePath = 'C:/Users/Lilia_Varyvoda/Desktop/epam.png'
        const remoteFilePath = await browser.uploadFile(filePath)
        await browser.pause(5000)
        await fileUpload.clickUploadButton(remoteFilePath)
        await browser.pause(5000)
        await fileUpload.clickSubmitButton()
        await browser.pause(5000)
        await AllureReporter.endStep("passed")
    })
})
