

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
        await this.searchField.click();
        await this.secondSearchField.click();
        await this.secondSearchField.setValue(text)
        await this.submitSearchButton.click();
    }
}

module.exports = new Search();
