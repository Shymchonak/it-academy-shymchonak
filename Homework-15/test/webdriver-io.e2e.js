const mainPage = require('../pageObject/mainPage');
const apiPage = require('../pageObject/apiPage');
const  searchModal = require('../pageObject/searchModal')

describe('WebdriverIO website test', async () =>{

    it.skip('Next Buttotn should changed section on additional pages', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        let pageToNav = await mainPage.getPageFromTopNavMenu('/docs/api');
        await mainPage.gotToNavPage(pageToNav);
        let section =  await apiPage.getRightNavMenuSection('protocols');
        await apiPage.gotoSectionFromRightNavMenu(section);
        let nextButtonText = await apiPage.getTextFromButtomNext();
        await apiPage.gotToNextPage();
        expect(await apiPage.getTextOfPageTitle()).toEqual(nextButtonText)
    })

    // it('Notifcation "No result for" is displayed', async () =>{
    //     await mainPage.navigate('https://webdriver.io/');
    //     await mainPage.startSearch;
    //     await browser.pause(4000)
    //     // await searchModal.inputSearchKey('sdfsdfsdf');
    //     // expect(await searchModal.noSearchResultIsDisplayed).toEqual(true)
    // })

    it('Reset button for assisant help', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.openAssitentDialogWindow();
        await searchModal.generateExample();
        await browser.pause(6000)
        await searchModal.resetExmpaleRequest();
        expect(await searchModal.getAssistentInputFieldText()).toEqual('')
        // await searchModal.inputSearchKey('sdfsdfsdf');
        // expect(await searchModal.noSearchResultIsDisplayed).toEqual(true)
    })

})