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

    //С методом не хочет рабоать, а на прмую с локатора - рабоатет, не смог разобраться
    // метод возвращает UNDEFINED
    async expampleRequestStillDisplayed(){
       return await this.gerenatedAnswer.isDisplayed();
    }
}

module.exports = new AssistanModal();