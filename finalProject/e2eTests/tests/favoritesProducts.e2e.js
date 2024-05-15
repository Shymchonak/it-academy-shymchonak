const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const loginPage = require('../pageobjects/loginPage')

describe('Adding products to Favorites', async () => {
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

    it('favorites page is clear after deleting added products', async () => {
        await mainPage.navigate(constants.BASEURL);
        await mainPage.addProductToFavorites(constants.WASHINGMACHINESCATEGORY);
        await mainNavMenu.openFavoritePage();
        await mainPage.deleteAllProductFromFvarivePage();
        await expect(await (mainPage.tetitleOfEmptyFavoritePage.getText())).toContain(constants.TITLEOFEMPTYFAVORITEPAGE)
    })


})