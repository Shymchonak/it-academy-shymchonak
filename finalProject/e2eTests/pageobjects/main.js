
const Base = require('./base')
const mainNavMenu = require('./components/mainNavMenu')
const {waitForElementIsDisplayed} = require("../helpers/waiter");
const constants = require("../e2eTestData/Constants");

class MainPage extends Base {

    addProdutToCompare(numberOFproduct){
        return ($$('.btn.btn--clear[title="В сравнение"]')[numberOFproduct]);
    }
    openModalToaddProductToCartButton(numberofProduct){
        return $$('.btn.c-cart.ec-add-to-cart')[numberofProduct];
    }

    async  addProductForComparing(numberOfCategory, productNumber){
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
        await this.baseClick(this.addProdutToCompare(productNumber));
        await this.baseClick(this.compareModalButton);
    }

    async addProductToCart(numberOfCategory){
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);
        await this.baseClick(this.goToCartButtonInModal);
    }

    async addTheSameProductToCartTwice(numberOfCategory){
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);
        await this.baseClick(this.goToCartButtonInModal);
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
        await this.openModalToaddProductToCartButton(1);
    }

    async addProductToFavorites(numberOfCategory){
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
        await this.baseClick(this.buttonAddToFavorites);

    }

    async selectAvaialbePromotion(numberOfCategory, typeOfPromotion){
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory))
        await this.baseClick(typeOfPromotion)
        await this.scrollBrowserVertical(400);
        waitForElementIsDisplayed(this.titleOfInstallmentPlan)
    }

    get titleOfInstallmentPlan(){
        return $$('.c-payment')[1]
    }

    promotionCategory(promotion){
        return $$('.item-box')[promotion];
    }

    buttonToConfirmePreOrder(){
        return $$('//*[@class="btn c-cart ec-preorder btn--block"]')[0]
    }
    get preOrderButtton(){
        return $('//div[@class="item-box" and text()="Предзаказы"]')
    }

    get preOrderNameFiled(){
        return $('#preorder_name')
    }
    get preOrderPhoneField(){
        return $('#preorder_phone')
    }

    get checkOutPreOrderButton(){
        return $('//button[@class="btn btn--lg btn--block"]//span[text()="Оформить"]')
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
        return $('//p[text()="Пока не добавлено ни одного товара для сравнения"]');
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

    get buttonDeleteAllOnFavoritePage(){
        return $$('.btn.btn--index')[1]
    }

    get tetitleOfEmptyFavoritePage(){
        return $('.account-favorites-epty');
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
        await this.baseClick(mainNavMenu.getMainCategoriesOfProducts(numberOfCategory));
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

    async listOfFilteredItems(){
        return '//a[@class="c-text"]'
    }
}

module.exports = new MainPage();
