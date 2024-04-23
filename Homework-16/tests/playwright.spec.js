const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/main');
const Header = require('../page_object/components/header');
const LeftNavMenu = require('../page_object/components/leftNavMenu');
const NavButtons = require('../page_object/components/navButtons')
const Titles =require ('../page_object/components/titles')
const SearchModal = require('../page_object/components/searchModal')

test.describe('Playwright website test', async function (){

    let mainPage
    let header
    let leftNavMenu
    let navButtons
    let titles
    let searchModal
    test.beforeEach( async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        leftNavMenu = new LeftNavMenu(page);
        navButtons = new NavButtons(page);
        titles = new Titles(page);
        searchModal = new SearchModal(page);
    })

    test('Invalid Test result', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await header.openSearchWindow();
        await searchModal.enterSearchKeywordIntoSearchField();
        await expect(await (searchModal.getInvalidResultOfSearch())).toContain('No results for')

    })
    test('Next nav button navigate not next arcticle', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await header.goToDocsPage();
        let navButtonText = navButtons.getGetTextOfNextButton();
        // console.log(await navButtonText)
        await navButtons.goToNextPage();
        // console.log(await titles.getTextOfFirstTittle())
        await expect(titles.getTextOfFirstTittle()).toEqual(navButtonText)

    })

    test('Navigate to second level of left nav menu on Dosc page', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await header.goToDocsPage();
        await leftNavMenu.openOfSecondLevelLeftMenu();
        await leftNavMenu.goToSecondLevel()
        await expect(await page.url()).toContain('annotations');
    })

    test('Changing program language', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await  header.setNewProgramLanguage();
        await expect(await page.url()).toContain('python');
    })
})