import RootObject from "./rootObject";
import {expect} from 'chai'
import AllureReporter from "@wdio/allure-reporter";
//import {step}  from '../helpers/logger';


import { stepOptions } from '../data/types';
import { step } from '../helpers/logger';


export default class ContextMenu extends RootObject{
    constructor(){
        super()
    }

    open(): void {
        AllureReporter.addStep('Navigating to context menu page')
        super.open('/context_menu')
      }

    async contextMenuField(): Promise<WebdriverIO.Element> {
        return await $('#hot-spot');
    }

    // async rightClickOnContextMenu(): Promise<void> {
    //     AllureReporter.addStep("Clicking right on context menu")
    //     const right = await this.contextMenuField();
    //     await right.click({ button: 'right', skipRelease:true});
    // }

    async rightClickOnContextMenu(options?: stepOptions,): Promise<void> {
        await step(
        options,
        
        'Verify if the first checkbox is choosed and displayed',
        'The first checkbox should be choosed and displayed',
        'The first checkbox is choosed and displayed',
        async () => {
        
            const right = await this.contextMenuField();
            await right.click({ button: 'right', skipRelease:true});
        }
        )
        };


    // async rightClickOnContextMenu(): Promise<void> {
    //     await step(
    //       true,
    //       true,
    //       'Clicking right on context menu',
    //       'The alert should appear',
    //       "1",
    //       async () => {
    //         const right = await this.contextMenuField();
    //         await right.click({ button: 'right', skipRelease:true});
    //       },
    //     );
    //   }
}