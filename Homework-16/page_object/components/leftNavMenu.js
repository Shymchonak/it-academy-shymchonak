const Base = require('../base')

class LeftNavMenu extends Base {

    constructor(page) {
        super(page);
    }

    async getFirstLevelLeftMenu(itemName) {
        return this.page.locator(`//*[contains(@class,"menu__link--sublist") and text()='${itemName}']`)
    }

    async getSecondLevelLeftMenu(itemName) {
        return this.page.locator(`//*[contains(@class,"menu__link") and text()='${itemName}']`)
    }

    // async visibleSecondLevel(){
    //  if  (await (await this.getSecondLevelLeftMenu('Annotations')).isVisible()) {
    //      return true
    //  }
    //  else { return false}




    async openOfSecondLevelLeftMenu(){
        await (await this.getFirstLevelLeftMenu('Playwright Test')).dblclick();
    }
    async goToSecondLevel(){
        await (await this.getSecondLevelLeftMenu('Annotations')).click();
    }

}

module.exports = LeftNavMenu;