const Base = require('../base')

class Titles extends Base {

    constructor(page) {
        super(page);
    }

    // get firstTitleOnPage() {
    //     return this.page.locator('//h1')
    // }

    async getTextOfFirstTittle(){
        return await this.page.locator('//div[@class="theme-doc-markdown markdown"]//h1').textContent();
    }

}

module.exports = Titles;
