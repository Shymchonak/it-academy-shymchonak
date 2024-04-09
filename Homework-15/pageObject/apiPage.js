

class ApiPage {


    get buttomButtonNextForText(){
        return $(`.pagination-nav__link.pagination-nav__link--next .pagination-nav__label`);

    }
    get buttomButtonNextForClick() {
        return $(`.pagination-nav__link.pagination-nav__link--next`);
    }

    async gotToNextPage (){
        await this.buttomButtonNextForClick.waitForDisplayed();
        await this.buttomButtonNextForClick.click();
    }

    get titleOfPage(){
        return $(`.theme-doc-markdown.markdown h1`)
    }

}

module.exports = new ApiPage();