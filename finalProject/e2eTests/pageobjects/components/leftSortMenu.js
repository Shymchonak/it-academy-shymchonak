const Base = require('../base');
const { waitForElementIsDisplayed } = require('../../helpers/waiter');

class LeftSortMenu extends Base {
  get checkBoxOfFirstBrand() {
    return $$('.inp-box__text')[32];
  }
  get textOfCheckBoxOfFirstBrand() {
    return $$('//div[@style="display: inline;"]')[15];
  }
  get filterPrice() {
    return $$('.filter-label')[1];
  }
  get maxPriceValue() {
    return $$('.inp.inp--lg.ec_filter')[1];
  }

  get fulteringResults() {
    return $('//div[@class="item-box"]//span');
  }

  async sortProductsByMaxPrice(maxPriceOfProduct) {
    await this.baseSetValue(this.maxPriceValue, maxPriceOfProduct);
    await this.baseClick(this.filterPrice);
    await waitForElementIsDisplayed(this.fulteringResults);
  }
}

module.exports = new LeftSortMenu();
