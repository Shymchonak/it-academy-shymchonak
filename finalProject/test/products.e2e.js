const mainPage = require("../pageobjects/main");
const constants = require("../testdata/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const cart = require('../pageobjects/cart')
const loginPage = require('../pageobjects/loginPage')
const { waitForElementIsDisplayed } = require('../helpers/waiter')

describe('Compare products', async () =>  {
    it.skip('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductForComparingAndRemoveIt(constants.TELEVISONCATRGORY)
        await expect(await (mainPage.thereIsNothingToCompareNotification.getText())).toContain(constants.THEREISNOTHINGTOCOMPARE)
    })

    it.skip('Several products should be added for comparing', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addSPairOfProdusctsForComparing(constants.SMARTPHONESCATEGORY, 0, 1)
        await expect(await (mainPage.titleOfCompareTab.getText())).toContain(constants.NUMBEROFCOMPARINGPODUCTS)
    })


})


describe('Adding products to cart', async () =>  {
    it.skip('One product should be add to cart', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToCart(constants.VACUUMCLEANERSCATEGORY)
        await expect(await (mainNavMenu.myCartTitle.getText())).toContain(constants.NUMBEROFADDEDPRODUCTS)
    })

    it.skip('"В корзине еще нет товаров" should be displayed after emptying your cart of items.', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToCart(constants.WASHINGMACHINESCATEGORY)
        await cart.removeProductFromTheCart();
        await waitForElementIsDisplayed(cart.emptyCartTittle)
        await expect(await (cart.emptyCartTittle.getText())).toContain(constants.EMPTYCARTTITLE)
    })

    it.skip('"Товар уже в корзине, вы хотите добавить еще одну единицу товара?" should be displayed when add the same product twice', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addTheSameProductToCartTwice(constants.REFRIGERATORSCATEGORY)
        await expect(await (mainPage.addTheSameProductToCartTwiceTitle.getText())).toContain(constants.NOTIFICATIONWHENTHESAMEPRODUCTADDEDTWICE)
    })


})
describe('Adding products to Favorites', async () => {
    it.skip('Modal Popup login should be displayed when user try to add product to favorites without logged in', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToFavorites(constants.SMARTPHONESCATEGORY)
        await expect(await (loginPage.titleFfModalPopupLogin.getText())).toEqual(constants.TITLEOFMODALPOPUPLOGOIN)
    })
})


describe('Promotions of products', async () => {
    it('"Картой рассрочки" should contain each product in the list', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.selectAvaialbePromotion(constants.PROMOTIONSCATOGORY)
        await expect(await (mainPage.titleOfInstallmentPlan.getText())).toContain("Картой рассрочки")
    })
})