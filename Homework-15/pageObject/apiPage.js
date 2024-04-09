

class ApiPage {

    async getRightNavMenuSection(section){
        return $(`.menu__link[href="/docs/api/${section}"] `)
    }
    async gotoSectionFromRightNavMenu (section){
       await section.waitForDisplayed();
        await section.click;
    }
    get buttomButtonNext(){
        return $(`.pagination-nav__link--next`);
    }
    async getTextFromButtomNext(){
        await this.buttomButtonNext.getText();
    }

    async gotToNextPage (){
        await this.buttomButtonNext.waitForDisplayed();
        await this.buttomButtonNext.click();
    }

    get titleOfPage(){
        return $(`.theme-doc-markdown.markdown h1`)
    }
    async getTextOfPageTitle(){
        await this.titleOfPage.waitForDisplayed();
        await this.titleOfPage.getText();
    }
}

module.exports = new ApiPage();