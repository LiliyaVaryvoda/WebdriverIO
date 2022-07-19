import CheckboxesPageObjects from "../pageObjects/checkboxesPageObjects";
const checkboxesPageObjects = new CheckboxesPageObjects()

describe('Checkboxes Elements Test', function(){

    before(async function () {
        checkboxesPageObjects.open();
      });

    it('Select checkboxes', async function(){
        await checkboxesPageObjects.verifyElementIsDisplayed(await checkboxesPageObjects.getCheckbox1())
        await checkboxesPageObjects.clickOnCheckbox1();
        await browser.pause(1000);
        await checkboxesPageObjects.clickOnCheckbox1();
        await browser.pause(1000);
        await browser.pause(1000);
        await checkboxesPageObjects.verifyElementIsDisplayed(await checkboxesPageObjects.getCheckbox2())
        await checkboxesPageObjects.clickOnCheckbox2();
        await browser.pause(1000);
        await checkboxesPageObjects.clickOnCheckbox2();
        await browser.pause(1000);
        await browser.pause(1000);
        await checkboxesPageObjects.clickOnCheckbox2();
        await browser.pause(1000);
    })
})