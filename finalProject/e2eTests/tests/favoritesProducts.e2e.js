const mainPage = require('../pageobjects/main');
const mainNavMenu = require('../pageobjects/components/mainNavMenu');
const loginPage = require('../pageobjects/loginPage');
const Constants = require('../e2eTestData/Constants');
const { waitForElementIsDisplayed } = require('../helpers/waiter');

let constantsLogin;
let constantsProductCategories;
let constantsFavorite;

describe('Adding products to Favorites', async () => {
  beforeEach(async () => {
    constantsLogin = new Constants.Login();
    constantsProductCategories = new Constants.ProductCategories();
    constantsFavorite = new Constants.Favorite();
  });

  it('Modal Popup login should be displayed when user try to add product to favorites without logged in', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.addProductToFavorites(constantsProductCategories.SMART_PHONES_CATEGORY);
    await waitForElementIsDisplayed(loginPage.titleOfModalPopupLogin);
    await expect(await loginPage.titleOfModalPopupLogin.getText()).toEqual(constantsLogin.TITLE_OF_MODAL_POP_UP_LOGIN);
  });

  it('add product to favorites after logged in', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await loginPage.loginWithCredentials(constantsLogin.VALID_LOGIN, constantsLogin.VALID_PASSWORD);
    await mainPage.addProductToFavorites(constantsProductCategories.VACUUM_CLEANERS_CATEGORY);
    await mainNavMenu.openFavoritePage();
    await expect(await mainPage.titleOfFavoritePage.getText()).toEqual(constantsFavorite.TITLE_OF_FAVORITE_PAGE);
  });

  it('favorites page is clear after deleting added products', async () => {
    await mainPage.navigate(constantsLogin.BASE_URL);
    await mainPage.addProductToFavorites(constantsProductCategories.WASHING_MACHINES_CATEGORY);
    await mainNavMenu.openFavoritePage();
    await mainPage.baseClick(mainPage.buttonDeleteAllOnFavoritePage);
    await expect(await mainPage.tetitleOfEmptyFavoritePage.getText()).toContain(constantsFavorite.TITLE_OF_EMPTY_FAVORITE_PAGE);
  });
});
