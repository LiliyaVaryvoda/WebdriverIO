// import RootObject from './rootObject';
// import { expect } from 'chai';

// export default class AddElementsPageObject extends RootObject {
//   constructor() {
//     super();
//   }

//   open(): void {
//     super.open('add_remove_elements/');
//   }

//   async getAddElementButton(): Promise<WebdriverIO.Element> {
//     return await $('button=Add Element');
//   }

//   async getDeleteButtons(): Promise<WebdriverIO.ElementArray> {
//     return await (await $('div#elements')).$$('button=Delete');
//   }

//   async clickOnAddElementsButton(): Promise<void> {
//     const button = await this.getAddElementButton();
//     button.click();
//   }

//   async clickOnDeleteButton(button: WebdriverIO.Element): Promise<void> {
//     await button.click();
//   }

//   async verifyElementIsDisplayed(element: WebdriverIO.Element): Promise<void> {
//     expect(await element.isDisplayed()).to.be.true;
//   }

//   async verifyLength(
//     elements: WebdriverIO.ElementArray,
//     expectedLength: number,
//   ): Promise<void> {
//     expect(await elements).to.have.length(expectedLength);
//   }
// }
