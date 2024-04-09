class SponsorPage {

    get becomeBronzeSponsorLink(){
        return $('[href="https://opencollective.com/webdriverio/contribute/bronze-sponsor-69224/checkout?interval=month&amount=100&contributeAs=me"]')
    }

    async goToBronzeSponsorPayment(){
        await this.becomeBronzeSponsorLink.waitForDisplayed();
        await this.becomeBronzeSponsorLink.click();
    }

    get contributionOnRedirectedPage(){
        return $('.Text__P-sc-1gblpeb-0-h4.cRpRXv')
    }
    async getTextOfContribution(){

        await this.contributionOnRedirectedPage.getText();

    }
}

module.exports = new SponsorPage();