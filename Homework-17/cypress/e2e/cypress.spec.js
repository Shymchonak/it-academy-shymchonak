const mainPage = require('../../page_object/main')
const mainNavMenu = require('../../page_object/components/MainNavMenu')
const rightSideMenu = require('../../page_object/components/rightSideMenu')

describe('5element website e2e tests', () => {
    it('"Ничего не найдено" should be displayed when enter invalid keyworkd into search searchfield', () => {
        cy.visit('https://5element.by/#/search/');
        mainNavMenu.enterTextIntoSeacrField('sdfsdfsdf');
        mainNavMenu.nothingNotFoundNotification.should('contain.text', 'Ничего не найдено')
    })
    it('"Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare', () => {
        cy.visit('https://5element.by');
        mainNavMenu.selectCategoryOfProducts('3');
        mainPage.addProdutToCompare(1);
        mainNavMenu.openCompareModal();
        mainNavMenu.removeProductFromCompareModal();
        mainNavMenu.thereIsNothingToCompareNotification.should('contain.text', 'Пока не добавлено ни одного товара для сравнения')

    })

    it('"Есть на уценке" should be displayed when products are filtered by marked checkbox "discount"', () => {
        cy.visit('https://5element.by');
        mainNavMenu.selectCategoryOfProducts('5');
        rightSideMenu.markDiscountCheckBox(1);
        mainPage.allProductsFilteredWithDiscount().each(() => {}).should('contain.text', 'Есть на уценке')

    })
});