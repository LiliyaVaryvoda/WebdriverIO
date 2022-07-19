import DropDownPageObjects from "../pageObjects/dropDownPageObjects";
const dropDownPageObjects = new DropDownPageObjects()

describe('DropDown Elements Test', function(){

    before(async function () {
        dropDownPageObjects.open();
      });

    it('Select checkboxes', async function(){
        await browser.pause(5000)
        const a = await dropDownPageObjects.dropDownElement.selectByVisibleText("Option 1")
        await browser.pause(5000)
        await dropDownPageObjects.dropDownElement.selectByVisibleText("Option 2")
        await browser.pause(5000)
    })
})