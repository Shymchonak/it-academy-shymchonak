const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const cart = require('../pageobjects/cart')
const loginPage = require('../pageobjects/loginPage')
const { waitForElementIsDisplayed } = require('../helpers/waiter')
const leftSortMenu = require('../pageobjects/components/leftSortMenu')

describe.skip('Compare products', async () =>  {
    it('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductForComparingAndRemoveIt(constants.TELEVISONCATRGORY)
        await expect(await (mainPage.thereIsNothingToCompareNotification.getText())).toContain(constants.THEREISNOTHINGTOCOMPARE)
    })

    it('Several products should be added for comparing', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addSPairOfProdusctsForComparing(constants.SMARTPHONESCATEGORY, 0, 1)
        await expect(await (mainPage.titleOfCompareTab.getText())).toContain(constants.NUMBEROFCOMPARINGPODUCTS)
    })

})

describe.skip('Adding products to cart', async () =>  {
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
        await expect(await (mainPage.addTheSameProductToCartTwiceTitle.getText())).toContain(constants.NOTIFICATIONWHENTHESAMEPRODUCTADDEDTWICE)
    })

    it('Final price of the order must be equal to the sum of the prices of the items.', async () => {
        await mainPage.navigate(constants.BASEURL);
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
describe.skip('Adding products to Favorites', async () => {
    it('Modal Popup login should be displayed when user try to add product to favorites without logged in', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToFavorites(constants.SMARTPHONESCATEGORY)
        await expect(await (loginPage.titleFfModalPopupLogin.getText())).toEqual(constants.TITLEOFMODALPOPUPLOGOIN)
    })
    it('add product to favorites after logged in', async () => {
        await mainPage.navigate(constants.BASEURL);
        await loginPage.loginWithCredentials(constants.VALIDLOGIN,constants.VALIDPASSWORD)
        await mainPage.addProductToFavorites(constants.VACUUMCLEANERSCATEGORY);
        await mainNavMenu.openFavoritePage();
        await expect(await (mainPage.titleOfFavoritePage.getText())).toEqual(constants.TITLEOFFAVORITEPAGE)
    })

    it('favorites page is clear after deletin added products', async () => {
        await mainPage.navigate(constants.BASEURL);
        await loginPage.loginWithCredentials(constants.VALIDLOGIN,constants.VALIDPASSWORD)
        await mainPage.addProductToFavorites(constants.VACUUMCLEANERSCATEGORY);
        await mainNavMenu.openFavoritePage();
        await mainPage.deleteAllProductFromFvarivePage();
        await expect(await (mainPage.TetitleOfEmptyFavoritePage.getText())).toContain(constants.TITLEOFEMPTYFAVORITEPAGE)
    })


})
describe('Sorting products', async () => {
    it('Price of products should not exceed the established maximum', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.baseClick(mainNavMenu.getmainCategoriesOfProducts(constants.VACUUMCLEANERSCATEGORY));
        await leftSortMenu.sortProductsByMaxPrice(constants.MAXPRICEOFPRODUCT);
        for (let item of await mainPage.createNewArrayOfElementsText(await mainPage.arrayOfPricesAllProducts())){
            await expect(Number(item)).toBeLessThanOrEqual(Number(constants.MAXPRICEOFPRODUCT))
        }
    })
    it('Sorted items by brand should contain BRAN in title', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.baseClick(mainNavMenu.getmainCategoriesOfProducts(constants.MICROWAVECATEGORY));
        await leftSortMenu.markFirstCheckBoxOfBrandFilter();
        await console.log(await leftSortMenu.textOfCheckBoxOfFirstBrand.getText());
        await console.log(await mainPage.convertArrayOfElentsTextToLowerCaseForComparing(await mainPage.listOfFilteredItems()))
        for (let item of await mainPage.convertArrayOfElentsTextToLowerCaseForComparing(await mainPage.listOfFilteredItems())){
            await expect(item).toContain(await leftSortMenu.textOfCheckBoxOfFirstBrand.getText())
        }
    })

})

describe.skip('Promotions of products', async () => {
    it('"Картой рассрочки" should contain each product in the list', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.selectAvaialbePromotion(constants.PROMOTIONSCATOGORY)
        await expect(await (mainPage.titleOfInstallmentPlan.getText())).toContain("Картой рассрочки")
    })
})