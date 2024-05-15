const Base = require('./base')
const constants = require('../e2eTestData/Constants')

class Cart extends Base {


    get emptyCartTittle(){
        return $('.section-heading__title')
    }

    get buttonToRemoveAddedProducts(){
        return $('.section-product-heading__link')
    }
    async removeProductFromTheCart(){
        this.baseClick(this.buttonToRemoveAddedProducts);
        await browser.pause(1000)
    }

    async openCartPage(){
        await this.baseClick(this.buttonToOpenCart);
    }

    get buttonToOpenCart(){
        return $$('.n-item')[2]
    }

    async checkWhatCartIsEmpty(){
        await this.navigate(constants.OPENACARTPAGE)
        if (this.buttonToRemoveAddedProducts.isDisplayed){
            await this.removeProductFromTheCart();
        }
    }
}

module.exports = new Cart();