
const Base = require('./base')
const mainNavMenu = require('./components/mainNavMenu')
const {waitForElementIsDisplayed} = require("../helpers/waiter");
const constants = require("../e2eTestData/Constants");

class MainPage extends Base {

    async addProdutToCompare(numberOFproduct){
        await this.baseClick($$('.btn.btn--clear[title="В сравнение"]')[numberOFproduct]);
    }
    async openModalToaddProductToCartButton(numberofProduct, ){
        await this.baseClick($$('.btn.c-cart.ec-add-to-cart')[numberofProduct]);
    }

    async   addProductForComparingAndRemoveIt(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.addProdutToCompare(0);
        await this.baseClick(this.compareModalButton);
        await this.baseClick(this.removeProductFromCompareModalButton);
    }

    async addProductToCart(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);
        await this.baseClick(this.goToCartButtonInModal);

    }
    async addTheSameProductToCartTwice(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);
        await this.baseClick(this.goToCartButtonInModal);
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);

    }

    async addProductToFavorites(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.baseClick(this.buttonAddToFavorites);

    }


    async   addSPairOfProdusctsForComparing(numberOfCategory, firstProduct, secondProduct){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.addProdutToCompare(firstProduct);
        await this.addProdutToCompare(secondProduct);
        await this.baseClick(this.compareModalButton);
        await this.baseClick(mainNavMenu.buttonToOpenComparePage);

    }

    async selectAvaialbePromotion(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory))
        await this.baseClick(this.promotionCategory(constants.INSTALLMENTPLAPROMOTIONCATEGORY))
        await browser.scroll(0, 400)
        waitForElementIsDisplayed(this.titleOfInstallmentPlan)
    }


    get titleOfInstallmentPlan(){
        return $$('.c-payment')[1]
    }

    promotionCategory(promotion){
        return $$('.item-box')[promotion];
    }


    get goToCartButtonInModal(){
        return $$('.btn.btn--block')[14]
    }

    get compareModalButton(){
        return $('.js-drop-select .n-item__icon.ic-compare');
    }

    get removeProductFromCompareModalButton() {
        return  $('.btn.btn--clear.ic-trash');
    }
    get thereIsNothingToCompareNotification() {
        return $$('.h-drop__content')[0];
    }

    get addTheSameProductToCartTwiceTitle(){
        return $('//div[text()="Товар уже в корзине, вы хотите добавить еще одну единицу товара?"]')
    }

    get buttonAddToFavorites(){
        return  $$('.ic-favorite')[3]
    }
    get titleOfCompareTab(){
        return $('.nav-item.active')
    }
    get titleOfPersonalArea(){
        return $('//div[@class="section-heading__title" and text()="Личный кабинет"]');
    }
    get titleOfFavoritePage(){
        return $('.section-heading__title')
    }

    get buttonDeleteAllonFavoritePage(){
        return $$('.btn.btn--index')[1]
    }
    get tetitleOfEmptyFavoritePage(){
        return $('.account-favorites-epty');
    }
    async deleteAllProductFromFvarivePage(){
        await this.baseClick(this.buttonDeleteAllonFavoritePage)
    }


    priceOfProductInCart(numberOfProduct){
        return $$('.c-cost')[numberOfProduct]
    }

    async getPriceOfPrductInCart(numberOfProduct){
       let priceOfProduct =  Number(await this.priceOfProductInCart(numberOfProduct).getText())
        return priceOfProduct
    }

    get finalPriceOfOrder(){
        return $('.shopping-order-total__value.ec-total-value')
    }

    async getFinalPriceOfOrder(){
        let finalPrice = Number(await this.finalPriceOfOrder.getText())
        return finalPrice
    }

    async openReviewForProductModal(numberOfCategory){
        await this.baseClick(mainNavMenu.getmainCategoriesOfProducts(numberOfCategory));
        await this.baseClick(this.firstProductInTheList);
        await this.baseClick(this.buttonToOpenReviwPage);
        await this.baseClick(this.buttonToAddReview);

    }

    async fillUpReviewForm(name,email, text ){
        await this.baseSetValue(this.nameForReviewField,name);
        await this.baseSetValue(this.emailForReviewField,email);
        await this.baseSetValue(this.textForGeneralInpression, text);
        await this.buttonForAgreement.click();
    }

    get firstProductInTheList(){
        return $('.swiper-slide.aa.swiper-slide-visible.swiper-slide-active');
    }

    get buttonToOpenReviwPage(){
        return $$('._anchor-info')[0]
    }

    get buttonToAddReview(){
        return $('//button[text()="Добавить отзыв"]')
    }
    get nameForReviewField(){
        return $$('.inp.inp--lg[type="text"]')[3]
    }
    get emailForReviewField(){
        return $$('.inp.inp--lg[type="text"]')[4]
    }
    get textForGeneralInpression(){
        return $$('.inp.inp--lg[type="text"]')[8]
    }

    get buttonToSendReview(){
        return $('//button[text()="Опубликовать отзыв"]');
    }
    get buttonForAgreement(){
        return $$('.inp-box__view')[3]
    }

    async arrayOfPricesAllProducts(){
        return '.c-price'
    }
    async createNewArrayOfElementsText(elemtns){
        const textArray = browser.$$(elemtns).map(elem => elem.getText());
        return textArray
    }
    async convertArrayOfElentsTextToLowerCaseForComparing(arrayToLowerCase){
        let myresult = await this.createNewArrayOfElementsText(arrayToLowerCase)
        let newmyresult = myresult.map(el => el.toUpperCase());
        return newmyresult
    }

    async removeNumberFromString(string){
        let newstring = string.replace(/([0-9])/g, '');
        return newstring
    }

    async listOfFilteredItems(){
        return '//a[@class="c-text"]'
    }
}

module.exports = new MainPage();
