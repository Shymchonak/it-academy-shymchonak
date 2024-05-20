const mainPage = require('../pageobjects/main');
const mainNavMenu = require('../pageobjects/components/mainNavMenu');
const cart = require('../pageobjects/cart');
const { waitForElementIsDisplayed } = require('../helpers/waiter');
const Constants = require('../e2eTestData/Constants');
const formNewArrays = require('../helpers/formNewArrays');

let constantsLogin;
let constantsProductCategories;
let constantsCart;
let constantsSearch;
let summ;

describe('Adding products to cart', async () => {
  beforeEach(async () => {
    constantsLogin = new Constants.Login();
    constantsProductCategories = new Constants.ProductCategories();
    constantsCart = new Constants.Cart();
    constantsSearch = new Constants.Search();
  });

  it('One product should be add to cart', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.addProductToCart(constantsProductCategories.VACUUM_CLEANERS_CATEGORY, 1);
    await mainPage.baseClick(mainNavMenu.buttonOpenCart);
    await expect(await mainNavMenu.numberOfAddedProductsToCart.getText()).toContain(constantsCart.NUMBER_OF_ADDED_PRODUCTS);
  });

  it('"В корзине еще нет товаров" should be displayed after emptying your cart of items.', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.addProductToCart(constantsProductCategories.WASHING_MACHINES_CATEGORY, 1);
    await mainPage.baseClick(mainNavMenu.buttonOpenCart);
    await cart.removerProductsFromCartIfItNotEmpty();
    await waitForElementIsDisplayed(cart.catalogLink);
    await expect(await cart.emptyCartTittle.getText()).toContain(constantsCart.EMPTY_CART_TITLE);
  });

  it('"Товар уже в корзине, вы хотите добавить еще одну единицу товара?" should be displayed when add the same product twice', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await cart.removerProductsFromCartIfItNotEmpty();
    await mainPage.addProductToCart(constantsProductCategories.SMART_PHONES_CATEGORY, 2);
    await mainPage.baseClick(mainPage.alreadyInCartButton);
    await waitForElementIsDisplayed(mainPage.addTheSameProductToCartTwiceTitle);
    await expect(await mainPage.addTheSameProductToCartTwiceTitle.getText()).toContain(constantsCart.NOTIFICATION_WHEN_THE_SAME_PRODUCT_ADDED_TWICE);
  });

  it('Final price of the order must be equal to the sum of the prices of the items.', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await cart.removerProductsFromCartIfItNotEmpty();
    await mainPage.addProductToCart(constantsProductCategories.HEADPHONES_CATEGORY, 2);
    await mainPage.baseClick(mainNavMenu.buttonOpenCart);
    for (let elem of await formNewArrays.formNewArrayWithTextOfElements(await mainPage.priceOfProductInCart())) {
      summ += Number(elem);
    }
    await expect(await summ).toEqual(await Number(mainPage.finalPriceOfOrder.getText()));
  });

  it('Button to send review is available', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.openReviewForProductModal(constantsProductCategories.ELECTRIC_KETTLES_CATEGORY);
    await mainPage.fillUpReviewForm(constantsLogin.FIRST_NAME, constantsLogin.VALID_LOGIN, constantsSearch.INVALID_SEARCH_KEY_WORD);
    await expect(await mainPage.buttonToSendReview.isEnabled()).toEqual(true);
  });
});
