Feature: 5element website testing

  Scenario: Search with wrong keyword
    Given User visit "https://5element.by/"
    When User search with text "sdfsdfsfsdf"
    Then User should see picture with text "Извините, но по вашему запросу ничего не найдено"



  Scenario: Login with invalid credentials
    Given User visit "https://5element.by/"
    When User login with LOGIN "adsf" and password "adfads"
    Then Notification "Некорректный ввод" should be displayed

  Scenario: Delete item from compare page
    Given User visit "https://5element.by/"
    When User add product from "3" category to compare
    Then "Пока не добавлено ни одного товара для сравнения" should be displayed when there is nothing to compare

  Scenario Outline: Add product to cart from different categories

    Given User visit "https://5element.by/"
    When User add product from "<Category>" category to cart
    Then "<PartOfTheTitle>" should be displayed in title of product by order <order>

    Examples:
      |Category| PartOfTheTitle|order|
      |4       |Стиральная машина         | 0 |
      |5       |Телевизор                 | 1 |