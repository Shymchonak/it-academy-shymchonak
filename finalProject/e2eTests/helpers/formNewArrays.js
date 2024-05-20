const Base = require('../pageobjects/base');

class FormNewArrays extends Base {
  async formNewArrayWithTextOfElements(elements) {
    const textArray = browser.$$(elements).map((elem) => elem.getText());
    return textArray;
  }

  async getArrayWithElementsInLowerCase(elements) {
    let myresult = await this.formNewArrayWithTextOfElements(elements);
    let newmyresult = myresult.map((el) => el.toLowerCase());
    return newmyresult;
  }

  async getArrayWithElementsInUpperCase(elements) {
    let myresult = await this.formNewArrayWithTextOfElements(elements);
    let newmyresult = myresult.map((el) => el.toUpperCase());
    return newmyresult;
  }
}

module.exports = new FormNewArrays();
