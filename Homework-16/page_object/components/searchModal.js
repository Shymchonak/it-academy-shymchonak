const Base = require('../base')

class SearchModal extends Base {

    constructor(page) {
        super(page);
    }

    get inputSearchField() {
        return this.page.locator('//input[@class="DocSearch-Input"]')
    }

    async enterSearchKeywordIntoSearchField(){
        return await this.inputSearchField.fill('sdfgdsfg');
    }
    get invalidResultOfSearch(){
        return this.page.locator('//p[@class="DocSearch-Title"]');
    }
    async getInvalidResultOfSearch(){
        return await this.invalidResultOfSearch.textContent();
    }
}

module.exports = SearchModal;