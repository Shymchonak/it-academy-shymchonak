const mainPage = require('../pageobjects/main');
const Constants = require('../e2eTestData/Constants');
const {waitForElementIsDisplayed} = require('../helpers/waiter');
const mainNavMenu = require('../pageobjects/components/mainNavMenu');

let constantsLogin
let constantsProductCategories
let constantsCompareProducts

describe('Compare products', async () => {

    beforeEach(async () => {
        constantsLogin = new Constants.Login();
        constantsProductCategories = new Constants.ProductCategories();
        constantsCompareProducts = new Constants.CompareProducts();
    })

    it('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await mainPage.addProductForComparing(constantsProductCategories.TELEVISON_CATRGORY, 0)
        await mainPage.baseClick(mainPage.removeProductFromCompareModalButton);
        await waitForElementIsDisplayed(mainPage.thereIsNothingToCompareNotification)
        await expect(await mainPage.thereIsNothingToCompareNotification.getText()).toContain(constantsCompareProducts.THERE_IS_NOTHING_TO_COMPARE)
    })

    it('Several products should be added for comparing', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await mainPage.addProductForComparing(constantsProductCategories.TELEVISON_CATRGORY, 0);
        await mainPage.navigate(constantsLogin.BASE_URL);
        await mainPage.addProductForComparing(constantsProductCategories.TELEVISON_CATRGORY, 1);
        await mainPage.baseClick(mainPage.compareModalButton);
        await mainPage.baseClick(mainNavMenu.buttonToOpenComparePage);
        await expect(await (mainPage.titleOfCompareTab.getText())).toContain(constantsCompareProducts.NUMBER_OF_COMPARING_PRODUCTS)
    })
})