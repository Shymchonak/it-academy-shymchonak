class Base {

    async navigate(url) {
        await browser.url(url)
    }

    //Не видит новой кладки по этому методу
    // async switchTabByNumber(number) {
    //     const handles = await browser.getWindowHandles();
    //     await browser.switchWindow(handles[number]);
    // }

    async switchBrowserTab(title){
        await browser.switchWindow(title);
    }

}

module.exports = Base;