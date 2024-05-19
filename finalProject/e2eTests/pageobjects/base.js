

class Base {
    async navigate(url) {
        await browser.url(url)
    }

    async baseClick(selector) {
        await selector.waitForClickable();
        await selector.click();
    }

    async baseSetValue(selector, text) {
        await selector.waitForDisplayed();
        await selector.setValue(text);
    }

    async scrollBrowserVertical(vertical, horizontal = 0){
        await browser.scroll(horizontal, vertical)
    }

    // async formNewArrayWithTextOfElements(elements){
    //     const textArray = browser.$$(elements).map(elem => elem.getText());
    //     return textArray
    // }
    //
    // async getArrayWithElementsInLowerCase(elements){
    //     let myresult = await this.formNewArrayWithTextOfElements(elements)
    //     let newmyresult = myresult.map(el => el.toLowerCase());
    //     return newmyresult
    // }



}


module.exports =  Base;
