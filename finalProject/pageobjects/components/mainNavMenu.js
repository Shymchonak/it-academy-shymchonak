
const Base = require('../base')
const mainPage = require('../main')
class MainNaveMenu extends Base {




    get myCartTitle(){
        return $('.section-part .section-heading__title')
    }


    getmainCategoriesOfProducts(numberOfCategory){
        return $(`.swiper-slide.swiper-slide-visible[aria-label="${numberOfCategory} / 11"]`)
    }

    get buttonToOpenComparePage(){
        return $('//a[@class="btn btn--index btn--block"]')
    }

    async openFavoritePage(){
        await this.baseClick(this.buttonToOpenFavoriteModal);
        await this.baseClick(this.buttonToNavigateToFvaoritePage)
    }
    get buttonToOpenFavoriteModal(){
        return $$('.ic-favorite')[0]
    }

    get buttonToNavigateToFvaoritePage(){
        return $('//a[@class="btn btn--index btn--block"]')
    }

}

module.exports = new MainNaveMenu();
