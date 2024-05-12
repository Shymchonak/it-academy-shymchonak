
const Base = require('../pageobjects/base')
const mainNavMenu = require('../pageobjects/components/mainNavMenu')
class MainPage extends Base {

    async addProdutToCompare(numberOFproduct){
        await $$('.btn.btn--clear[title="В сравнение"]')[numberOFproduct].click();
    }
    async openModalToaddProductToCartButton(numberofProduct){
        await $$('.btn.c-cart.ec-add-to-cart')[numberofProduct].click();
    }

    async   addProductForComparing(numberOfCategory){
        await mainNavMenu.getmainCategoriesOfProducts(numberOfCategory).click();
        await this.addProdutToCompare(0);
        await this.compareModalButton.click();
        await this.removeProductFromCompareModalButton.click();

    }



    async addProductToCart(numberOfCategory){
        await mainNavMenu.getmainCategoriesOfProducts(numberOfCategory).click();
        await this.openModalToaddProductToCartButton(1);
        await this.goToCartButtonInModal.click();

    }

    get goToCartButtonInModal(){
        return $$('.btn.btn--block')[14]
    }

    get compareModalButton(){
        return $('.js-drop-select .n-item__icon.ic-compare');
    }

    get removeProductFromCompareModalButton(){
        return  $('.btn.btn--clear.ic-trash');
    }
    get thereIsNothingToCompareNotification(){
        return $$('.h-drop__content')[0];
    }

    get addTheSameProductToCartTwice (){
        return ('//div[text()="Товар уже в корзине, вы хотите добавить еще одну единицу товара?"]')
    }

}

module.exports = new MainPage();
