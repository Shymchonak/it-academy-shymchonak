class SearchModal {

    get searchInputField() {
        return $('.DocSearch-Input')
    }

    async inputSearchKey (keyWord){
        await this.searchInputField.waitForDisplayed();
        await this.searchInputField.setValue(keyWord);
    }

    get noSearchResults(){
        return $('.DocSearch-Title')
    }

    async noSearchResultIsDisplayed (){
        await this.noSearchResults.isDisplayed();
    }

    get assistentInputField (){
        return $('[placeholder="Why Webdriver.IO?"]')
    }
    async getAssistentInputFieldText() {
        await assistentInputField.getText();
    }
    get exampleOfRequest () {
        return $('.ms-animate-fade-in-up.ms-text-xs:nth-child(2)');
    }

    async generateExample(){
        await this.exampleOfRequest.waitForDisplayed();
        await this.exampleOfRequest.click();
    }
    get resetButton(){
        return $('#ms-reset-button')
    }
    async resetExmpaleRequest(){
        await this.resetButton.waitForDisplayed();
        await this.resetButton.click();
    }
}

module.exports = new SearchModal();