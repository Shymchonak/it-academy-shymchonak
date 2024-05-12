const mainPage = require ('../pageobjects/main')
const loginPage = require('../pageobjects/loginPage')
const constants = require('../testdata/Constants')



describe.skip('Login page tests', async () =>  {
    it('warning notification should be displayed when login with invalid credentials', async () => {
        await mainPage.navigate(constants.BASEURL);
        await loginPage.loginWithCredentials(constants.LOGIN,constants.PASSWORD)
        await expect(await (loginPage.warningNotification.getText())).toContain(constants.WARNINGNOTIFICATIONWITHINVALIDCREDENTIALS)
    })
})