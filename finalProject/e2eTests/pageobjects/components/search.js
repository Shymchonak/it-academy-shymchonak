const Base = require('../base');

class Search extends Base {
  get searchField() {
    return $('.h-search');
  }

  get secondSearchField() {
    return $('.multi-search-header__form .inp.inp--lg');
  }

  get submitSearchButton() {
    return $('.multi-search-header__submit');
  }

  get negativeSearchResult() {
    return $('.search-empty-block');
  }

  get titileOfSerachResult() {
    return $$('.c-text')[0];
  }

  get searchResult() {
    return $('.section-heading__title');
  }

  async listOfSearchedItems() {
    return '//a[@class="c-text"]';
  }

  async searchByKeyWord(text) {
    await this.baseClick(this.searchField);
    await this.baseClick(this.secondSearchField);
    await this.baseSetValue(this.secondSearchField, text);
    await this.baseClick(this.submitSearchButton);
  }
}

module.exports = new Search();
