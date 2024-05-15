const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const cart = require('../pageobjects/cart')
const { waitForElementIsDisplayed } = require('../helpers/waiter')


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

    it('"Товар уже в корзине, вы хотите добавить еще одну единицу товара?" should be displayed when add the same product twice', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addTheSameProductToCartTwice(constants.REFRIGERATORSCATEGORY)
        await waitForElementIsDisplayed(mainPage.addTheSameProductToCartTwiceTitle)
        await expect(await (mainPage.addTheSameProductToCartTwiceTitle.getText())).toContain(constants.NOTIFICATIONWHENTHESAMEPRODUCTADDEDTWICE)
    })

    it('Final price of the order must be equal to the sum of the prices of the items.', async () => {
        await mainPage.navigate(constants.BASEURL);
        await cart.checkWhatCartIsEmpty();
        await mainPage.addProductToCart(constants.VACUUMCLEANERSCATEGORY)
        await mainPage.addProductToCart(constants.HEADPHONESCATEGORY)
        let firstPrice = await mainPage.getPriceOfPrductInCart(0)
        let secondPrice = await mainPage.getPriceOfPrductInCart(1)
        let summPrice = firstPrice + secondPrice
        await expect(await summPrice).toEqual(await mainPage.getFinalPriceOfOrder())
    })

    it('Button to send review is available', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.openReviewForProductModal(constants.HEADPHONESCATEGORY);
        await mainPage.fillUpReviewForm(constants.FIRSTNAME, constants.VALIDLOGIN, constants.INVALIDSEARCHKEYWORD)
        await expect(await (mainPage.buttonToSendReview.isEnabled())).toEqual(true)
    })


})

