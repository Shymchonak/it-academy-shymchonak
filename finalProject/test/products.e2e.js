const mainPage = require("../pageobjects/main");
const constants = require("../testdata/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const cart = require('../pageobjects/cart')
const { waitForElementIsDisplayed } = require('../helpers/waiter')

describe.skip('Compare products', async () =>  {
    it('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductForComparing(constants.TELEVISONCATRGORY)
        await expect(await (mainPage.thereIsNothingToCompareNotification.getText())).toContain(constants.THEREISNOTHINGTOCOMPARE)
    })
})


describe('Adding products to cart', async () =>  {
    it('One product should be add to cart', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToCart(constants.VACUUMCLEANERSCATEGORY)
        await expect(await (mainNavMenu.myCartTitle.getText())).toContain(constants.NUMBEROFADDEDPRODUCTS)
    })

    it('"В корзине еще нет товаров" should be displayed after emptying your cart of items.', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToCart(constants.WASHINGMACHINESCATEGORY)
        await cart.removeProductFromTheCart();
        await waitForElementIsDisplayed(cart.emptyCartTittle)
        await expect(await (cart.emptyCartTittle.getText())).toContain(constants.EMPTYCARTTITLE)
    })

    it.skip('"Товар уже в корзине, вы хотите добавить еще одну единицу товара?" should be displayed when add the same product twice', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainNavMenu.addProductToCart(constants.VACUUMCLEANERSCATEGORY)
        await mainNavMenu.addProductToCart(constants.VACUUMCLEANERSCATEGORY)
        await expect(await (mainPage.addTheSameProductToCartTwice.getText())).toContain(constants.NOTIFICATIONWHENTHESAMEPRODUCTADDEDTWICE)
    })

})