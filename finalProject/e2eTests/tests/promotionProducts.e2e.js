const mainPage = require('../pageobjects/main');
const Constants = require('../e2eTestData/Constants');

let constantsLogin
let constantsProductCategories
let constantsPromotion

describe('Promotions of products', async () => {

    beforeEach(async () => {
        constantsLogin = new Constants.Login();
        constantsProductCategories = new Constants.ProductCategories();
        constantsPromotion = new Constants.Promotion();
    })

    it('"Картой рассрочки" should contain each product in the list', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await mainPage.selectAvaialbePromotion(constantsProductCategories.PROMOTIONS_CATEGORY,  mainPage.promotionCategory(constantsPromotion.INSTALLMENT_PLAN_PROMOTION_CATEGORY))
        await expect(await (mainPage.titleOfInstallmentPlan.getText())).toContain("Картой рассрочки")
    })

    it('button "Pre-order" is available when all reuqired fields are filled', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await mainPage.selectAvaialbePromotion(constantsProductCategories.PROMOTIONS_CATEGORY, mainPage.preOrderButtton)
        await mainPage.baseClick(mainPage.buttonToConfirmePreOrder());
        await mainPage.baseSetValue(mainPage.preOrderNameFiled, constantsLogin.FIRST_NAME)
        await mainPage.baseSetValue(mainPage.preOrderPhoneField, constantsLogin.PHONE)
        await expect(await (mainPage.checkOutPreOrderButton.isEnabled())).toEqual(true)
    })
})