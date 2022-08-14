import allure from "@wdio/allure-reporter";
let fs = require("fs");

export interface stepOptions {
  takeScreenshot?: boolean;
  proceedSteps?: boolean;
}

export default class Reporters {
  constructor() {}
  private static sampleObject = { log: [] };
  private static nameSelected = `./jsonfiles/file${Math.floor(
    Math.random() * 1000
  )}.json`;
  static async stepAllure(
    options: stepOptions = { proceedSteps: false, takeScreenshot: false },
    description: string,
    expected: string,
    stepNumber: string,
    assertion: Function
  ): Promise<void> {
    if (options.proceedSteps === true) {
      try {
        const stepStart = `STEP ${stepNumber} STARTED!\n\n Description: ${description}\n Expected result: ${expected}\n`;
        const allureTestTitle = `Step ${stepNumber} ${description}`;

        if (options.takeScreenshot === true) {
          await assertion();
          allure.addStep(
            allureTestTitle,
            {
              content: await browser.saveScreenshot(
                `./screenshots/step_${stepNumber}_test_nameSelected.png`
              ),
              type: "image/png",
              nameSelected: `Step ${stepNumber} screenshot`,
            },
            "passed"
          );
          console.log(stepStart);
          Reporters.sampleObject.log.push([
            { stepNumber: `${stepNumber}` },
            { description: `${description}` },
            { expected: `${expected}` },
          ]);
        } else {
          await assertion();
          allure.addStep(allureTestTitle);
          Reporters.sampleObject.log.push([
            { stepNumber: `${stepNumber}` },
            { description: `${description}` },
            { expected: `${expected}` },
          ]);
          console.log(stepStart);
        }
      } catch (error) {
        console.log(`Step ${stepNumber} failed.`);
        throw error;
      } finally {
        fs.writeFile(
          Reporters.nameSelected,
          JSON.stringify(Reporters.sampleObject),
          (error) => console.error(error)
        );
      }
    } else {
      try {
        await assertion();
      } catch (error) {
        throw error;
      }
    }
  }
}

export const stepAllure = Reporters.stepAllure;
