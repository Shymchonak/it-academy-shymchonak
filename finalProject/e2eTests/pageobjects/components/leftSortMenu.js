const Base = require('../base')
const mainPage = require('../main')
class LeftSortMenu extends Base {

    async sortProductsByMaxPrice(maxPriceOfProduct){
        await this.baseSetValue(this.maxPriceValue, maxPriceOfProduct)
        await this.baseClick(this.filterPrice);
        await browser.pause(1500)
    }
    async markFirstCheckBoxOfBrandFilter(){
        await this.baseClick(this.checkboxOfFirstBrand);
        await browser.pause(1500)
    }
    get checkboxOfFirstBrand() {
        return $$('.inp-box__text')[32]
    }
    get textOfCheckBoxOfFirstBrand(){
       return $$('//div[@style="display: inline;"]')[15]
    }
    get filterPrice(){
        return $$('.filter-label')[1]
    }
    get maxPriceValue(){
        return $$('.inp.inp--lg.ec_filter')[1]
    }

}

module.exports = new LeftSortMenu();
