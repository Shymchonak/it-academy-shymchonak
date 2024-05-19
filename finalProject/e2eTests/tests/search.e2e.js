const search = require('../pageobjects/components/search');
const mainPage = require('../pageobjects/main');
const Constants = require('../e2eTestData/Constants');
const formNewArrays = require('../helpers/formNewArrays')
const {waitForElementIsDisplayed} = require('../helpers/waiter');

let constantsLogin
let constantsSearch

describe('Searching results tests', async () => {

    beforeEach(async () => {
        constantsLogin = new Constants.Login();
        constantsSearch = new Constants.Search();
    })

    it('"Извините, но по вашему запросу ничего не найдено" should be displayed when search with invalid keyword', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await search.searchByKeyWord(constantsSearch.INVALID_SEARCH_KEY_WORD)
        await waitForElementIsDisplayed(search.negativeSearchResult)
        await expect(await (search.negativeSearchResult.isDisplayed())).toEqual(true)
    })
    it('List of product should be displayed when search with valid keyword', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await search.searchByKeyWord(constantsSearch.VALID_SEARCH_KEY_WOWRD)
        let searchResult = await search.titileOfSerachResult.getText()
        await expect(await (searchResult.toLowerCase())).toContain( constantsSearch.VALID_SEARCH_KEY_WOWRD )
    })

    it('Titles of search results should contain searched keyword', async () => {
        await mainPage.navigate(constantsLogin.BASE_URL);
        await search.searchByKeyWord(constantsSearch.VALID_SEARCH_KEY_WOWRD);
        await waitForElementIsDisplayed(search.searchResult)
        for ( el of await formNewArrays.getArrayWithElementsInLowerCase(await search.listOfSearchedItems())){
            await expect(el).toContain(constantsSearch.VALID_SEARCH_KEY_WOWRD)
        }
    })

})
