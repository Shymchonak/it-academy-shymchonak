const mainPage = require("../pageobjects/main");
const constants = require("../e2eTestData/Constants");
const mainNavMenu = require("../pageobjects/components/mainNavMenu");
const leftSortMenu = require('../pageobjects/components/leftSortMenu')



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
        for (let item of await mainPage.convertArrayOfElentsTextToLowerCaseForComparing(await mainPage.listOfFilteredItems())){
            await expect(item).toContain(await leftSortMenu.textOfCheckBoxOfFirstBrand.getText())
        }
    })

})