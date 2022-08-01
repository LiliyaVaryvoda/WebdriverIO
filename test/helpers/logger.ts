import allure from '@wdio/allure-reporter';
import { stepOptions } from '../data/types';


  export async function step(
    options: stepOptions = { createStep: true, takeScreenshot: false },
    title:string,
    asyncFunction : Function
  ): Promise<void> {
          allure.addStep(
            `${title}`,
            {
              content: await browser.saveScreenshot(`./screenshots/step_test_name.png`),
              type: 'image/png',
              name: "Step screenshot",
            },
            'passed',
          );
        }
