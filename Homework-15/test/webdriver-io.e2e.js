const mainPage = require('../pageObject/mainPage');
const apiPage = require('../pageObject/apiPage');
const  assistantModal = require('../pageObject/assistantModal')
const sponsorPage = require('../pageObject/sponsorPage')

describe('WebdriverIO website test', async () =>{

    it('Next Buttotn should changed section on additional pages', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        let pageToNav = await mainPage.getPageFromTopNavMenu('/docs/api');
        await mainPage.gotToNavPage(pageToNav);
        let nextButtonText = await apiPage.buttomButtonNextForText.getText();
        await apiPage.gotToNextPage();
        let titleText = await apiPage.titleOfPage.getText();
        expect(await titleText).toEqual(nextButtonText)
    })


    it('Reset button for assisant help', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        await mainPage.openAssitentDialogWindow();
        await assistantModal.generateExample();
        await browser.pause(12000)
        await assistantModal.resetExmpaleRequest();
        expect(await assistantModal.gerenatedAnswer.isDisplayed()).toEqual(false)  //С методом не хочет рабоать, а на прмую с локатора - рабоатет, не смог разобраться
        // метод возвращает UNDEFINED

    })

    it('Redirect for Bronze Sponsor level', async () =>{
        await mainPage.navigate('https://webdriver.io/');
        let pageToNav = await mainPage.getPageFromTopNavMenu('/docs/sponsor');
        await mainPage.gotToNavPage(pageToNav);
        await sponsorPage.goToBronzeSponsorPayment();
        await browser.pause(5000)
        // await mainPage.switchTabByNumber(1)
        await browser.switchWindow('Contribute to WebdriverIO');
        //С методом не хочет рабоать, а на прмую с локатора - рабоатет, не смог разобраться
        // метод возвращает UNDEFINED
        expect(await sponsorPage.contributionOnRedirectedPage.getText()).toEqual('You’ll contribute $100.00 USD monthly.')

    })


})