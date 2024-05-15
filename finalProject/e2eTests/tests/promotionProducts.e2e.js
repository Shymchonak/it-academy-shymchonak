const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const { waitForElementIsDisplayed } = require('../helpers/waiter')

describe('Promotions of products', async () => {
    it('"Картой рассрочки" should contain each product in the list', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.selectAvaialbePromotion(constants.PROMOTIONSCATOGORY)
        waitForElementIsDisplayed(mainPage.titleOfInstallmentPlan)
        await expect(await (mainPage.titleOfInstallmentPlan.getText())).toContain("Картой рассрочки")
    })
})