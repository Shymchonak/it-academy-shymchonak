
const Base = require('../base')
const mainPage = require('../main')
class MainNaveMenu extends Base {

    get myCartTitle(){
        return $('.section-part .section-heading__title')
    }
    get numberOfAddedProductsToCart(){
        return $('//div[@class="section-part"]//div[@class="section-heading__title"]//small')
    }
    getMainCategoriesOfProducts(numberOfCategory){
        return $(`.swiper-slide.swiper-slide-visible[aria-label="${numberOfCategory} / 11"]`)
    }

    get buttonOpenCart(){
        return $('//div[@class="h-added-drop h-drop"]//div[text()="Корзина"]')
    }
    get buttonToOpenComparePage(){
        return $('//a[@class="btn btn--index btn--block"]')
    }

    get buttonToOpenFavoriteModal(){
        return $$('.ic-favorite')[0]
    }

    get buttonToNavigateToFvaoritePage(){
        return $('//a[@class="btn btn--index btn--block"]')
    }

    async openFavoritePage(){
        await this.baseClick(this.buttonToOpenFavoriteModal);
        await this.baseClick(this.buttonToNavigateToFvaoritePage)
    }

}

module.exports = new MainNaveMenu();
