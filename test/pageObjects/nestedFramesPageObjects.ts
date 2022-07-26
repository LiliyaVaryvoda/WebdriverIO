import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class NestedFramesClass extends RootObject{
    constructor(){
        super()
    }
    
    open(): void {
        AllureReporter.addStep('Navigating to Nested Frames page')
        super.open('nested_frames')
      }

    async leftFrame(): Promise<WebdriverIO.Element> {
        return await $('html > frameset > frame:nth-child(1)')
    }

}