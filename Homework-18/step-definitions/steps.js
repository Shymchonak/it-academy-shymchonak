const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Base = require('../pageobjects/base');
const mainPage = require('../pageobjects/mainPage');
const search = require('../pageobjects/components/search');
const loginPage = require('../pageobjects/loginPage')
const mainNavMenu = require('../pageobjects/components/mainNavMenu')


Given (/^User visit "(.*)"$/, async(url) => {
    await mainPage.navigate(url)
})


When(/^User search with text "(.*)"$/, async (text) =>{
    await search.searchProduct(text);
})

When(/^User login with LOGIN "(.*)" and password "(.*)"$/, async (login, password) =>{
    await loginPage.loginWithCredentials(login, password)
})
When(/^User add product from "(.*)" category to compare$/, async(numberOfCategory) =>{
    await mainNavMenu.addProductForComparing(numberOfCategory)
    })
When(/^User add product from "(.*)" category to cart$/, async(numberOfCategory)=> {
    await mainNavMenu.addProducttoCart(numberOfCategory);
    // await mainNavMenu.removeProductFromTheCart();
})

Then(/^"(.*)" should be displayed in title of product by order (.*)$/, async(text,order) => {
    await expect(await (mainNavMenu.titleOfAddedToCartProduct(order).getText())).toContain(text)
})

Then(/^"(.*)" should be displayed when there is nothing to compare$/, async(text) => {
    await expect(await (mainNavMenu.thereIsNothingToCompareNotification.getText())).toContain(text)
})

Then (/^Notification "(.*)" should be displayed$/, async(text) => {
    await expect(await (loginPage.warningNotification.getText())).toContain(text);
})

Then (/^User should see picture with text "(.*)"$/, async (text) => {
    await expect(await (search.negativeSearchResult.isDisplayed())).toEqual(true)
})

