//
//
// async function waitForElementIsDisplayed(element, timeout = 5000){
//     return element.waitForDisplayed({timeout})
// }

async function waitForElementIsDisplayed(selector, timeout = 20000){
    return browser.waitUntil(async () => {
        return selector.isDisplayed();
    }, {
        timeout: timeout,
        timeoutMsg: `Element is not displayed after ${timeout}`
    })
}


module.exports = { waitForElementIsDisplayed }