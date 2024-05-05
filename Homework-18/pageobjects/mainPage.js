const Base = require('../pageobjects/base')

class MainPage extends Base {

  async addProdutToCompare(numberOFproduct){
   await $$('.btn.btn--clear[title="В сравнение"]')[numberOFproduct].click();
  }
  async openModalToaddProductToCartButton(numberofProduct){
      await $$('.btn.c-cart.ec-add-to-cart')[numberofProduct].click();
  }


  }

module.exports = new MainPage();