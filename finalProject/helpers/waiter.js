

async function waitForElementIsDisplayed(element, timeout = 5000){
    return element.waitForDisplayed({timeout})
}

module.exports = { waitForElementIsDisplayed }