const Base = require('./base');
const Constants = require('../e2eTestData/Constants');

let constantsLogin = new Constants.Cart();
class Cart extends Base {
  get emptyCartTittle() {
    return $('.section-heading__title');
  }

  get buttonToRemoveAddedProducts() {
    return $('.section-product-heading__link');
  }

  async openCartPage() {
    await this.baseClick(this.buttonToOpenCart);
  }

  get catalogLink() {
    return $('//div[@class="section-part"]//a');
  }

  get buttonToOpenCart() {
    return $$('.n-item')[2];
  }

  async removerProductsFromCartIfItNotEmpty() {
    await this.navigate(constantsLogin.OPEN_CART_PAGE);
    if (this.buttonToRemoveAddedProducts.isDisplayed) {
      this.baseClick(this.buttonToRemoveAddedProducts);
    }
  }
}

module.exports = new Cart();
