
const Base = require('../base')


class Search extends Base {

    get searchField() {
        return $('.h-search');
    }

    get secondSearchField(){
        return $('.multi-search-header__form .inp.inp--lg');
    }

    get submitSearchButton(){
        return $('.multi-search-header__submit');
    }

    get negativeSearchResult(){
        return $('.search-empty-block')
    }

    async searchByKeyWord(text){
        await this.baseClick(this.searchField);
        await this.baseClick(this.secondSearchField);
        await this.baseSetValue(this.secondSearchField, text)
        await this.baseClick(this.submitSearchButton);
    }

    get titileOfSerachResult(){
        return $$('.c-text')[0]
    }

    async listOfSearchedItems(){
        return '//a[@class="c-text"]'
    }

    get searchResult(){
        return $('.section-heading__title')
    }




}

module.exports = new Search();
