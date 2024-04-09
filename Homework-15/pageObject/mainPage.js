const Base = require('./basePage')



class MainPage extends Base {


    async getPageFromTopNavMenu(navTopPage){
        return $ (`.navbar__item.navbar__link[href="${navTopPage}"]`)
    }
    // get getPageFromTopNavMenu(){
    //     return $(`.navbar__item.navbar__link[href="/docs/api"]`)
    // }

    async gotToNavPage (pageToNav){
        await pageToNav.waitForDisplayed();
        await pageToNav.click();
    }

    get searchButton(){
        return $('.DocSearch-Button-Container')
    }

    async startSearch(){
        await this.searchButton.waitForDisplayed();
        await this.searchButton.click();
    }

    get assistentHelp() {
        return $('.ms-p-2.ms-transition');
    }

    async openAssitentDialogWindow(){
        await this.assistentHelp.waitForDisplayed();
        await this.assistentHelp.click();
    }
}

module.exports = new MainPage();