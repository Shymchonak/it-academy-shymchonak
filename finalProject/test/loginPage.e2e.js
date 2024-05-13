const mainPage = require ('../pageobjects/main')
const loginPage = require('../pageobjects/loginPage')
const constants = require('../testdata/Constants')
const header = require('../pageobjects/components/header')



describe('Login page tests', async () =>  {
    it('warning notification should be displayed when login with invalid credentials', async () => {
        await mainPage.navigate(constants.BASEURL);
        await loginPage.loginWithCredentials(constants.INVALIDLOGIN,constants.IVALIDPASSWORD)
        await expect(await (loginPage.warningNotification.getText())).toContain(constants.WARNINGNOTIFICATIONWITHINVALIDCREDENTIALS)
    })

    it('Success login with valid credentials', async () => {
        await mainPage.navigate(constants.BASEURL);
        await loginPage.loginWithCredentials(constants.VALIDLOGIN,constants.VALIDPASSWORD)
        await header.navigateToPersonalArea();
        await expect(await (mainPage.titleOfPersonalArea.getText())).toContain(constants.TITLEOFPERSONALAREA)
    })


})