import allure from '@wdio/allure-reporter';
export default class Reporters {
  constructor() {}


  static async stepAllure(
    createLog: boolean,
    takeScreenshot: boolean,
    description: string,
    expected: string,
    stepNumber : string,
    assertion: Function,
  ): Promise<void> {

    if (takeScreenshot === true && createLog === false) {
      try {
        const allureTestTitle = `Step ${stepNumber} : ${description}`
        await assertion();

        allure.addStep(
          allureTestTitle,
          {
            content: await browser.saveScreenshot(`./screenshots/step_${stepNumber}_test_name.png`),
            type: 'image/png',
            name: `Step ${stepNumber} screenshot`,
          },
          'passed'
          );

      }

      catch (error) {
        console.error(`Step ${stepNumber} failed.`,);
        throw error;
      }
}


    else if (takeScreenshot === false && createLog === true) {
      try {
        const stepStart = `STEP ${stepNumber} STARTED!\n\n Description: ${description}\n Expected result: ${expected}\n`;
        const allureTestTitle = `Step ${stepNumber} ${description}`
        await assertion();
        
        allure.addStep(allureTestTitle);
        console.log(stepStart);
      }
      
      
      catch (error) {
        console.error(`Step ${stepNumber} failed.`);
        throw error;
      }
} 


    else if (takeScreenshot === true && createLog === true) {
      try {
        const stepStart = `STEP ${stepNumber} STARTED!\n\n Description: ${description}\n Expected result: ${expected}\n`;
        const allureTestTitle = `Step ${stepNumber} ${description}`
        await assertion();

        allure.addStep(allureTestTitle,
          {
            content: await browser.saveScreenshot(`./screenshots/step_${stepNumber}_test_name.png`),
            type: 'image/png',
            name: `Step ${stepNumber} screenshot`,
          },
          'passed'
        );
        
        console.log(stepStart);
    }
    
      catch (error) {
        console.error(`Step ${stepNumber} failed.`,);
        throw error;
      }
}

    else {
      
      try {
        await assertion();
      }
      
      catch (error) {
        throw error;
      }
      console.log(`Step ${stepNumber} failed.`);
    }
    
  }
}


export const stepAllure = Reporters.stepAllure;