const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const {waitForElementIsDisplayed} = require("../helpers/waiter");

describe('Compare products', async () =>  {
    it('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductForComparingAndRemoveIt(constants.TELEVISONCATRGORY)
        waitForElementIsDisplayed(await mainPage.thereIsNothingToCompareNotification.getText());
        await expect(await mainPage.thereIsNothingToCompareNotification.getText()).toContain(constants.THEREISNOTHINGTOCOMPARE)
    })

    it('Several products should be added for comparing', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addSPairOfProdusctsForComparing(constants.SMARTPHONESCATEGORY, 0, 1)
        await expect(await (mainPage.titleOfCompareTab.getText())).toContain(constants.NUMBEROFCOMPARINGPODUCTS)
    })

})