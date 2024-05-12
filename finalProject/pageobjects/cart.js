const Base = require('../pageobjects/base')

class Cart extends Base {


    get emptyCartTittle(){
        return $('.section-heading__title')
    }

    get buttonToRemoveAddedProducts(){
        return $('.section-product-heading__link')
    }
    async removeProductFromTheCart(){
        this.buttonToRemoveAddedProducts.click();
    }


}

module.exports = new Cart();