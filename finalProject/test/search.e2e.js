const search = require('../pageobjects/components/search');
const mainPage = require("../pageobjects/main");
const constants = require("../testdata/Constants");






describe('Searching results tests', async () =>  {
    it.skip('"Извините, но по вашему запросу ничего не найдено" should be displayed when search with invalid keyword', async () => {
        await mainPage.navigate(constants.BASEURL);
        await search.searchByKeyWord(constants.INVALIDSEARCHKEYWORD)
        await expect(await (search.negativeSearchResult.isDisplayed())).toEqual(true)
    })
    it('List of product should be displayed when search with valid keyword', async () => {
        await mainPage.navigate(constants.BASEURL);
        await search.searchByKeyWord(constants.VALIDSEARCHKEYWOWRD)
        await expect(await (search.titileOfSerachResult.getText())).toContain( constants.VALIDSEARCHKEYWOWRD )
    })

})
