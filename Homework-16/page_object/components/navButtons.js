const Base = require('../base')

class NavButtons extends Base {

    constructor(page) {
        super(page);
    }

    get nextNavButton (){
        return this.page.locator('//a[@class="pagination-nav__link pagination-nav__link--next"]')
    }

    // get textOfButtonNext(){
    //     return this.page.locator('//div[@class="pagination-nav__label"]')
    // }

    async getGetTextOfNextButton(){
        return await this.page.locator('//div[@class="pagination-nav__label"]').textContent();
    }


    async goToNextPage(){
        await (await this.nextNavButton).click();

    }

}

module.exports = NavButtons;





