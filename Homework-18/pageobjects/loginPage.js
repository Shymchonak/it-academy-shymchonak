const Base = require('../pageobjects/base')
const header = require('../pageobjects/components/header')

class LoginPage extends Base {

    get loginField(){
        return $('.form-group .inp.inp--lg[placeholder="Ваш email или номер телефона"]')
    }
    get passwordFiled(){
        return $('.form-group .inp.inp--lg[placeholder="Пароль"]')
    }

    get loginButton() {
        return $$('.form-group')[16] //3
    }

    get warningNotification(){
        return $$('.form-group .inp-required')[6] //4
    }

    async loginWithCredentials(login, password){
        await header.enterButton.click();
        await this.loginField.setValue(login);
        await this.passwordFiled.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();