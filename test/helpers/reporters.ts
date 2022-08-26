import allure from "@wdio/allure-reporter";
let fs = require("fs");

export interface stepOptions {
  takeScreenshot?: boolean;
  proceedSteps?: boolean;
}

export interface LogFile {
  log: {
    stepNumber: string;
    description: string;
    expected: string;
    actual: string;
    status: string;
  }[];
}

export default class Reporters {
  constructor() {}
  private static sampleObject: LogFile = { log: [] };
  private static nameSelected = `./jsonfiles/file${Math.floor(
    Math.random() * 1000
  )}.json`;

  static async stepAllure(
    options: stepOptions = { proceedSteps: false, takeScreenshot: false },
    description: string,
    expected: string,
    actual: string,
    stepNumber: string,
    assertion: Function
  ): Promise<void> {
    if (options.proceedSteps === true) {
      try {
        const stepStart = `STEP ${stepNumber} STARTED!\n\n Description: ${description}\n Expected result: ${expected}\n`;
        const allureTestTitle = `Step ${stepNumber} ${description}`;

        if (options.takeScreenshot === true) {
          try {
            await assertion();
            allure.addStep(
              allureTestTitle,
              {
                content: await browser.saveScreenshot(
                  `./screenshots/step_${stepNumber}_test_${Math.floor(
                    Math.random() * 100
                  )}.png`
                ),
                type: "image/png",
                nameSelected: `Step ${stepNumber} screenshot`,
              },
              "passed"
            );
            console.log(stepStart);
            Reporters.sampleObject.log.push({
              stepNumber,
              description,
              expected,
              actual,
              status: "passed",
            });
          } catch (error) {
            await browser.saveScreenshot(
              `./screenshots/step_${stepNumber}_test_FAILED.png`
            );
            console.log(`Step ${stepNumber} has FAILED`);
            throw error;
          }
        } else {
          try {
            await assertion();
            allure.addStep(allureTestTitle);
            Reporters.sampleObject.log.push({
              stepNumber,
              description,
              expected,
              actual,
              status: "passed",
            });
            console.log(stepStart);
          } catch (error) {
            await browser.saveScreenshot(
              `./screenshots/step_${stepNumber}_test_FAILED.png`
            );
            console.log(`Step ${stepNumber} has FAILED`);
            throw error;
          }
        }
      } catch (error) {
        console.log(`Step ${stepNumber} failed.`);
        throw error;
      } finally {
        fs.writeFile(
          Reporters.nameSelected,
          JSON.stringify(Reporters.sampleObject),
          (error: Error) => console.error(error)
        );
      }
    } else {
      try {
        await assertion();
      } catch (error) {
        await browser.saveScreenshot(
          `./screenshots/step_${stepNumber}_test_FAILED.png`
        );
        console.log(`Step ${stepNumber} has FAILED`);
        throw error;
      }
    }
  }
}

export const stepAllure = Reporters.stepAllure;
