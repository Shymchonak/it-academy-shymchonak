const Base = require('../page_object/base')

class MainPage extends Base {

    closeIfCookiePopupisDiplayed(){
        cy.get('.js-cookie-popup-close.btn.btn--block').then($button => {
            if ($button.is(':visible')){
        cy.get('.js-cookie-popup-close.btn.btn--block').click();}
        })
    }
    clickOnSpecificAddtoCartbutton(numberofButton){
        cy.get('.c-controls>.ec-add-to-cart').eq(numberofButton).click();
    }
    addProdutToCompare(numberOFproduct){
        cy.get('.btn.btn--clear[title="В сравнение"]').eq(numberOFproduct).click();
    }
    gotToCartFromModal(){
        cy.get('.btn.btn--block[href="/cart"]').click();
    }
    allProductsFilteredWithDiscount(){
        return cy.get('.product-preview-payment__item.product-preview-payment__item_markdown.product-markdown')

    }
}

module.exports = new MainPage();