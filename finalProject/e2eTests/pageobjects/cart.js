const Base = require('./base')
const Constants = require('../e2eTestData/Constants')

let constantsLogin = new Constants.Cart
class Cart extends Base {


    get emptyCartTittle(){
        return $('.section-heading__title')
    }

    get buttonToRemoveAddedProducts(){
        return $('.section-product-heading__link')
    }

    async openCartPage(){
        await this.baseClick(this.buttonToOpenCart);
    }

    get buttonToOpenCart(){
        return $$('.n-item')[2]
    }

    async removerProductsFromCartIfItNotEmpty(){
        await this.navigate(constantsLogin.OPENA_CART_PAGE)
        if (this.buttonToRemoveAddedProducts.isDisplayed){
            await this.removeProductFromTheCart();
        }
    }

    async removeProductFromTheCart(){
        this.baseClick(this.buttonToRemoveAddedProducts);
        await browser.pause(1000)
    }
}

module.exports = new Cart();