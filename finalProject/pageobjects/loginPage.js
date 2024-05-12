const Base = require('../pageobjects/base')
const header = require('../pageobjects/components/header')
const { waitForElementIsDisplayed } = require('../helpers/waiter')

class LoginPage extends Base {

    get loginField(){
        return $('.form-group .inp.inp--lg[placeholder="Ваш email или номер телефона"]')
    }
    get passwordFiled(){
        return $('.form-group .inp.inp--lg[placeholder="Пароль"]')
    }

    get loginButton() {
        return $$('.form-group')[16]
    }

    get warningNotification(){
        return $('//span[text()="Некорректный ввод"]')
    }

    async loginWithCredentials(login, password){
        await header.enterButton.click();
        await this.loginField.setValue(login);
        await this.passwordFiled.setValue(password);
        await this.loginButton.click();
        await waitForElementIsDisplayed(this.warningNotification)
    }
}

module.exports = new LoginPage();