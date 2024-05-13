

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


}


module.exports =  Base;
