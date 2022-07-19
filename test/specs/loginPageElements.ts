import LoginPageObjects from "../pageObjects/loginPageObjects";
const loginPageObjects = new LoginPageObjects()

describe('Login Page Test', function(){

    before(async function () {
        loginPageObjects.open();
      });

    it('Login page test', async function(){
        await browser.pause(5000)
        await loginPageObjects.enterCorrectLogin("tomsmith", "SuperSecretPassword!")
        await loginPageObjects.clickLogin()
        await browser.pause(5000)
        await expect($(".subheader")).toHaveText('Welcome to the Secure Area. When you are done click logout below.')
        await browser.pause(5000)
    })
})