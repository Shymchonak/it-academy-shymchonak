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

    get modalPopupLogin(){
        return $('.modal-popup.modal-login')
    }

    get titleFfModalPopupLogin(){
        return $('//div[@class="modal-popup modal-login"]//div[@class="modal-popup-heading" and text()="Вход в аккаунт"]')
    }

    async loginWithCredentials(login, password){
        await this.baseClick(header.enterButton);
        await this.baseSetValue(this.loginField, login);
        await this.baseSetValue(this.passwordFiled, password);
        await this.baseClick(this.loginButton);

    }
}

module.exports = new LoginPage();