const Base = require('../base')

class Header extends Base {

    constructor(page) {
        super(page);
    }

    get selectProgramLanguage() {
        return this.page.locator('//div[@class="navbar__item dropdown dropdown--hoverable"]')
    }
    get docsPageButton(){
        return this.page.locator('//*[contains(@class,"navbar__item navbar__link") and text()=\'Docs\']')
    }
    async goToDocsPage(){
        await (await this.docsPageButton).click();
    }
    async getNewProgramLanguage(languageName){
        return this.page.locator(`//*[contains(@class,"dropdown__link") and text()='${languageName}']`)
    }
    async setNewProgramLanguage(){
       await (await this.selectProgramLanguage).click();
       await (await this.getNewProgramLanguage('Python')).click();
    }

}

module.exports = Header;