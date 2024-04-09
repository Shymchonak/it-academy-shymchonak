

class ApiPage {


    get buttomButtonNextForText(){
        return $(`.pagination-nav__link.pagination-nav__link--next .pagination-nav__label`);

    }
    get buttomButtonNextForClick() {
        return $(`.pagination-nav__link.pagination-nav__link--next`);
    }
    async getbuttomButtonText (){
        await this.buttomButtonNextForText.waitForDisplayed();
        return await this.buttomButtonNextForText.getText();
    }

    async gotToNextPage (){
        await this.buttomButtonNextForClick.waitForDisplayed();
        await this.buttomButtonNextForClick.click();
    }

    get titleOfPage(){
        return $(`.theme-doc-markdown.markdown h1`)
    }
    async getTitleOfPageText (){
        await this.titleOfPage.waitForDisplayed();
        return await this.titleOfPage.getText();
    }

}

module.exports = new ApiPage();