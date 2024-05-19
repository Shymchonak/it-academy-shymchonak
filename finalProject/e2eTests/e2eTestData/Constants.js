

class Constants {
    constructor() {
    }







    // NUMBEROFADDEDPRODUCTS = "1"
    // ALLPROMOTIONCATEGORY = "0"
    // MAINPROMOTIONCATEGORY = "1"

    // SALESPROMOTIONCATEGORY= "3"
    // GIFTSPROMOTIONCATEGORY ="4"
    // BUTTON_PREORDER = "0"

    // TITLEOFEMPTYFAVORITEPAGE = "У нас столько замечательных товаров,\n" +
    //     "а в Избранном у Вас – пусто :(\n" +
    //     "Перейти в каталог"

    // EMPTYCARTTITLE = "В корзине еще нет товаров"
    // NOTIFICATIONWHENTHESAMEPRODUCTADDEDTWICE = "Товар уже в корзине, вы хотите добавить еще одну единицу товара?"
}

class Login  {
    BASE_URL = "https://5element.by/"
    OPENA_CART_PAGE = "https://5element.by/cart"
    INVALID_PASSWORD =  "sdfsdfsdf"
    INVALID_LOGIN =  "sdfsfdsf"
    VALID_PASSWORD = "MoiParol"
    VALID_LOGIN = "shymchonak.s@gmail.com"
    FIRST_NAME = "Ivan"
    LAST_NAME = "Ivanov"
    PHONE = "33000000"
    WARNING_NOTIFICATION_WITH_INVALID_CREDENTIALS = "Некорректный ввод"
    TITLE_OF_PERSONAL_AREA = "Личный кабинет"
    TITLE_OF_MODAL_POP_UP_LOGIN = "Вход в аккаунт"
}

class Promotion {
    INSTALLMENT_PLAN_PROMOTION_CATEGORY = "2"
}

class Search {
    INVALID_SEARCH_KEY_WORD = "sdfsdfsdfsdfsdfsdf"
    VALID_SEARCH_KEY_WOWRD = "пылесос"
}

class ProductCategories {
    PROMOTIONS_CATEGORY = "1"
    SMART_PHONES_CATEGORY = "2"
    TELEVISON_CATRGORY = "3"
    VACUUM_CLEANERS_CATEGORY = "4"
    WASHING_MACHINES_CATEGORY = "5"
    REFRIGERATORS_CATEGORY = "6"
    MICRO_WAVE_CATEGORY = "7"
    HEADPHONES_CATEGORY = "8"
    ELECTRIC_KETTLES_CATEGORY = "9"
    BLENDERS_CATEGORY = "10"
    GARDEN_TRIMERS_CATEGORY = "11"
    NUMBER_OF_ADDED_PRODUCTS = "1"
    ALL_PROMOTION_CATEGORY = "0"
    MAIN_PROMOTION_CATEGORY = "1"
    INSTALLMENT_PLAN_PROMOTION_CATEGORY = "2"
    SALES_PROMOTION_CATEGORY= "3"
    GIFTS_PROMOTION_CATEGORY ="4"
}

class CompareProducts{
    THERE_IS_NOTHING_TO_COMPARE = "Пока не добавлено ни одного товара для сравнения"
    NUMBER_OF_COMPARING_PRODUCTS = "2"
}

class Favorite {
    TITLE_OF_FAVORITE_PAGE = "Избранное"
    TITLE_OF_EMPTY_FAVORITE_PAGE = "У нас столько замечательных товаров,\n" +
        "а в Избранном у Вас – пусто :(\n" +
        "Перейти в каталог"
}
class Cart {
    MAX_PRICE_OF_PRODUCT = "500"
}
module.exports =  {
    Login : Login,
    Promotion : Promotion,
    ProductCategories: ProductCategories,
    CompareProducts: CompareProducts,
    Search: Search,
    Favorite: Favorite,
    Cart: Cart
}