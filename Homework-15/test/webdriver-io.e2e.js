const mainPage = require('../pageObject/mainPage');
const apiPage = require('../pageObject/apiPage');
const  assistantModal = require('../pageObject/assistantModal')
const sponsorPage = require('../pageObject/sponsorPage')

describe('WebdriverIO website test', async () =>{

    it('Next Buttotn should changed section on additional pages', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        let pageToNav = await mainPage.getPageFromTopNavMenu('/docs/api');
        await mainPage.gotToNavPage(pageToNav);
        let nextButtonText = await apiPage.getbuttomButtonText();
        await apiPage.gotToNextPage();
        expect(await apiPage.getTitleOfPageText()).toEqual(nextButtonText)
    })


    it('Reset button for assisant help', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.openAssitentDialogWindow();
        await assistantModal.generateExample();
        await browser.pause(12000)
        await assistantModal.resetExmpaleRequest();
        expect(await assistantModal.expampleRequestStillDisplayed()).toEqual(false)

    })

    it('Redirect for Bronze Sponsor level', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        let pageToNav = await mainPage.getPageFromTopNavMenu('/docs/sponsor');
        await mainPage.gotToNavPage(pageToNav);
        await sponsorPage.goToBronzeSponsorPayment();
        await browser.pause(5000)
        //не находит страницу по методу
        // await mainPage.switchTabByNumber(1)
        await mainPage.switchBrowserTab('Contribute to WebdriverIO');

        expect(await sponsorPage.getTextOfContribution()).toEqual('You’ll contribute $100.00 USD monthly.')

    })


})