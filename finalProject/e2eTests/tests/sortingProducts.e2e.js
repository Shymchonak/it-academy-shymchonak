const mainPage = require('../pageobjects/main');
const mainNavMenu = require('../pageobjects/components/mainNavMenu');
const leftSortMenu = require('../pageobjects/components/leftSortMenu');
const Constants = require('../e2eTestData/Constants');
const formNewArrays = require('../helpers/formNewArrays');
const { waitForElementIsDisplayed } = require('../helpers/waiter');

let constantsLogin;
let constantsProductCategories;
let constantsCart;

describe('Sorting products', async () => {
  beforeEach(async () => {
    constantsLogin = new Constants.Login();
    constantsProductCategories = new Constants.ProductCategories();
    constantsCart = new Constants.Cart();
  });

  it('Price of products should not exceed the established maximum', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.baseClick(mainNavMenu.getMainCategoriesOfProducts(constantsProductCategories.VACUUM_CLEANERS_CATEGORY));
    await leftSortMenu.sortProductsByMaxPrice(constantsCart.MAX_PRICE_OF_PRODUCT);
    for (let item of await formNewArrays.formNewArrayWithTextOfElements(await mainPage.arrayOfPricesAllProducts())) {
      await expect(Number(item)).toBeLessThanOrEqual(Number(constantsCart.MAX_PRICE_OF_PRODUCT));
    }
  });

  it('Sorted items by brand should contain BRAND in title', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.baseClick(mainNavMenu.getMainCategoriesOfProducts(constantsProductCategories.MICRO_WAVE_CATEGORY));
    await mainPage.baseClick(leftSortMenu.checkBoxOfFirstBrand);
    await waitForElementIsDisplayed(leftSortMenu.fulteringResults);
    for (let item of await formNewArrays.getArrayWithElementsInUpperCase(await mainPage.listOfFilteredItems())) {
      await expect(item).toContain(await leftSortMenu.textOfCheckBoxOfFirstBrand.getText());
    }
  });
});
