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

    async registrastionOfNewUser(firstName, lastName, phone){
        await this.baseClick(header.enterButton);
        await this.baseClick(this.registrationButton);
        await this.baseSetValue(this.firstNameField, firstName);
        await this.baseSetValue(this.lastNameField, lastName);
        await this.baseSetValue(this.phoneField, phone)

    }
    get registrationButton(){
        return $('//a[@href="#" and text()="Зарегистрируйтесь"]')
    }

    get firstNameField(){
        return $$('.form-group .inp.inp--lg')[3]
    }
    get lastNameField(){
        return $$('.form-group .inp.inp--lg')[4]
    }
    get phoneField(){
        return $$('.form-group .inp.inp--lg')[5]
    }
    get getCdoeBySmsOrInViber(){
        return $('//button[@class="btn btn--lg btn--block"]//span[text()="Получить код в Viber или SMS"]')
    }
}

module.exports = new LoginPage();