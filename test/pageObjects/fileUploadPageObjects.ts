import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class FileUpload extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to File upload page')
        super.open('upload')
      }

    async uploadButton(): Promise<WebdriverIO.Element> {
        return await $('#file-upload')
    }

    async submitButton(): Promise<WebdriverIO.Element> {
        return await $('#file-submit')
    }

    async clickUploadButton(somepath): Promise<void> {
        AllureReporter.addStep("Clicking upload button")
        const button = await this.uploadButton();
        button.setValue(somepath)
    }

    async clickSubmitButton(): Promise<void> {
        AllureReporter.addStep("Clicking sumbit button")
        const button = await this.submitButton();
        button.click()
    }

}