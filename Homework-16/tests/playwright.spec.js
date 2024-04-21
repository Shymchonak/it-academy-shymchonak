const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/main')
const Header = require('../page_object/components/header')
const Docs = require('../page_object/docs')


test.describe('Playwright website test', async function (){

    let mainPage
    let header
    let docs
    test.beforeEach( async ({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        docs = new Docs(page);
    })

    test('Hide second level of left nav menu on Dosc page', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await header.goToDocsPage();
        await docs.openOfSecondLevelLeftMenu();
        await docs.goToSecondLevel()
        await expect(await page.url()).toContain('annotations');
    })

    test.skip('Changing program language', async({page}) => {
        await mainPage.navigate('https://playwright.dev/')
        await  header.setNewProgramLanguage();
        await expect(await page.url()).toContain('python');
    })
})