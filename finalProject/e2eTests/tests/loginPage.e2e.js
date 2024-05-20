const mainPage = require ('../pageobjects/main')
const loginPage = require('../pageobjects/loginPage')
const Constants = require('../e2eTestData/Constants');
const header = require('../pageobjects/components/header')

let constantsLogin

describe('Login page tests', async () => {

    beforeEach(async () => {
        constantsLogin = new Constants.Login();
    })

    it('Registration button is available', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await loginPage.registrastionOfNewUser(constantsLogin.FIRST_NAME, constantsLogin.LAST_NAME, constantsLogin.PHONE);
        await expect(await (loginPage.getCdoeBySmsOrInViber.isEnabled())).toEqual(true);
    })

    it('warning notification should be displayed when login with invalid credentials', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await loginPage.loginWithCredentials(constantsLogin.INVALID_LOGIN,constantsLogin.INVALID_PASSWORD)
        await expect(await (loginPage.warningNotification.getText())).toContain(constantsLogin.WARNING_NOTIFICATION_WITH_INVALID_CREDENTIALS)
    })

    it('Success login with valid credentials', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await loginPage.loginWithCredentials(constantsLogin.VALID_LOGIN,constantsLogin.VALID_PASSWORD)
        await mainPage.baseClick(header.personalAreaButton);
        await expect(await (mainPage.titleOfPersonalArea.getText())).toContain(constantsLogin.TITLE_OF_PERSONAL_AREA)
    })
})