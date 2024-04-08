class SponsorPage {

    get becomeBronzeSponsorLink(){
        return $('[href="https://opencollective.com/webdriverio/contribute/bronze-sponsor-69224/checkout?interval=month&amount=100&contributeAs=me"]')
    }

    async goToBronzeSponsorPayment(){
        await this.becomeBronzeSponsorLink.waitForDisplayed();
        await this.becomeBronzeSponsorLink.click();
    }

    get contributionOnRedirectedPage(){
        return $('.Grid__Box-sc-1b416rc-0.ixvXjn')
    }
    async getTextOfContribution(){
        await this.contributionOnRedirectedPage.waitForDisplayed();
        await this.contributionOnRedirectedPage.getText();
    }
}

module.exports = new SponsorPage();