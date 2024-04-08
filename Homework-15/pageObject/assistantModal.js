class AssistanModal {


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
    get gerenatedAnswer(){
        return $('.ms-justify-center:nth-child(4)')
    }
    async expampleRequestStillDisplayed(){
        await this.gerenatedAnswer.isDisplayedInViewport();
    }
}

module.exports = new AssistanModal();