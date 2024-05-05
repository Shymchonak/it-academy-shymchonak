const Base = require('../base')
const mainPage = require('../mainPage')

class MainNaveMenu extends Base {



    async   addProductForComparing(numberOfCategory){
       await this.getmainCategoriesOfProducts(numberOfCategory).click();
       await mainPage.addProdutToCompare(0);
       await this.compareModalButton.click();
       await this.removeProductFromCompareModalButton.click();
        await browser.pause(2000)
    }


    async addProducttoCart(numberOfCategory){
        await this.getmainCategoriesOfProducts(numberOfCategory).click();
        await mainPage.openModalToaddProductToCartButton(1);
        await this.goToCartButtonInModal.click();
        await browser.pause(2000)

    }


    get goToCartButtonInModal(){
        return $$('.btn.btn--block')[14]
    }

    titleOfAddedToCartProduct(order){
        return $$('.c-text')[order]
    }

    get buttonToRemoveAddProduct(){
        return $('.section-product-heading__link')
    }
    async removeProductFromTheCart(){
        this.buttonToRemoveAddProduct.click();
    }
   getmainCategoriesOfProducts(numberOfCategory){
        return $(`.swiper-slide.swiper-slide-visible[aria-label="${numberOfCategory} / 11"]`)
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
}

module.exports = new MainNaveMenu();