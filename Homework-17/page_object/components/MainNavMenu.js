const Base = require('../../page_object/base')

class MainNaveMenu extends Base {

    getmainCategoriesOfProducts(numberOfCategoy){
        return cy.get(`.swiper-slide.swiper-slide-visible[aria-label="${numberOfCategoy} / 11"]`)
    }
    get searchInputField(){
        return cy.get('.multi-search-header');
    }
    get nothingNotFoundNotification(){
        return cy.get('.multi-search-grid')
    }
    enterTextIntoSeacrField (text){

        this.searchInputField.click();
        this.searchInputField.type(text);
    }
    selectCategoryOfProducts(numberOfCategoy){
       this.getmainCategoriesOfProducts(numberOfCategoy).click();
    }
    openCompareModal(){
        cy.get('.js-drop-select .n-item__icon.ic-compare').click();
    }

    removeProductFromCompareModal(){
        cy.get('.btn.btn--clear.ic-trash').click();
    }

    get thereIsNothingToCompareNotification(){
        return cy.get('.h-added-drop.h-drop.js-drop-select.active .h-drop__body');
    }
}

module.exports = new MainNaveMenu();