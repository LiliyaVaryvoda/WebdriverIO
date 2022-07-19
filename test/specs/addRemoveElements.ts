// import AddElementPageObjects from '../pageObjects/addElementPageObjects';

// const addElementsPageObject = new AddElementPageObjects();

// describe('Add/Remove Elements test', function () {
//   before(async function () {
//     addElementsPageObject.open();
//   });
//   it('Should add elements to the page', async function () {
//     await addElementsPageObject.verifyElementIsDisplayed(
//       await addElementsPageObject.getAddElementButton(),
//     );

//     await addElementsPageObject.clickOnAddElementsButton();
//     await browser.pause(1000);
//     await addElementsPageObject.clickOnAddElementsButton();
//     await browser.pause(1000);
//     await addElementsPageObject.clickOnAddElementsButton();
//     await browser.pause(1000);

//     await addElementsPageObject.verifyLength(
//       await addElementsPageObject.getDeleteButtons(),
//       3,
//     );
//   });

//   it('Should delete elements from the page', async function () {
//     const buttons = await addElementsPageObject.getDeleteButtons();
//     await addElementsPageObject.verifyElementIsDisplayed(buttons[0]);
//     await addElementsPageObject.verifyElementIsDisplayed(buttons[1]);
//     await addElementsPageObject.verifyElementIsDisplayed(buttons[2]);

//     await addElementsPageObject.clickOnDeleteButton(buttons[1]);
//     await browser.pause(1000);
//     await addElementsPageObject.clickOnDeleteButton(buttons[2]);
//     await browser.pause(1000);

//     await addElementsPageObject.verifyLength(
//       await addElementsPageObject.getDeleteButtons(),
//       1,
//     );
//   });
// });
