import {Builder, By, until} from 'selenium-webdriver';
import { expect } from 'chai';


describe("Chrome driver website test", function(){
    let driver;

    before(async() => {
        driver = new Builder().forBrowser('chrome').build()
        await driver.manage().window().setSize({width: 1920, height: 1280})
    })

    after(async() => {
        await driver.quit();
    })

    it('Title should be "ChromeDriver"',async () => {
        await driver.get("https://chromedriver.chromium.org/home");
        const chromeDriverTitle = await driver.findElement(By.css('.Rn3Z1b.C9DxTc'));
        expect(await chromeDriverTitle.getText()).to.equal('ChromeDriver')
    })
    it('Redirect to new section "Chrome Extensions"', async () => {
        const buttonChromeExtensions = await driver.findElement(By.css('.VsJjtf:nth-child(3) .I35ICb'))
        await buttonChromeExtensions.click();
        //Подкрасить Хедер
        const newHeaderOfPage = await driver.findElement(By.css('.Pvc6xe'));
        await driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", newHeaderOfPage);
        //Дальнейшее прохождение тесата
        const titleChromeExtensions = await driver.findElement(By.css('.duRjpb .Rn3Z1b'));
        expect(await titleChromeExtensions.getText()).to.equal('Chrome Extensions');
    })
    it('Search result - first link contain word "driver"', async () =>{
        const searchButton = driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.iWs3gf'))
        await searchButton.click();
        const searchField = driver.findElement(By.css('.whsOnd'));
        await searchField.sendKeys('driver');
        const searchActionButton = driver.findElement(By.css('.i3PoXe'));
        await searchActionButton.click();
        await driver.wait(until.elementLocated(By.css('.gtazFe:nth-child(1)')));
        const firstLinkAfterSearch = await driver.findElement(By.css('.gtazFe:nth-child(1)'));
        expect(await firstLinkAfterSearch.getText()).contain('driver');
    })
    it('Mobile Emulation URL contain "/mobile-emulation"', async () => {
        const backSarchButton = await driver.findElement(By.css('.h3nfre'));
        await backSarchButton.click();
        const moreButton = await driver.findElement(By.css('.VsJjtf.oXBWEc'));
        await moreButton.click();
        const mobileEmulationButton = await driver.findElement(By.css('.ijMPi  [href="/mobile-emulation"]'));
        await mobileEmulationButton.click();
        expect(await driver.getCurrentUrl()).contain('/mobile-emulation');
    })
})

