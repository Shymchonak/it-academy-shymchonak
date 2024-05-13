const Base = require('../base')

class Header extends Base {

    get enterButton() {
        return $('.h-drop.h-user:nth-child(3) .h-drop__head')
    }

    get personalButton(){
        return $$('.h-drop__head')[3]
    }



    async navigateToPersonalArea(){
        await this.baseClick(this.personalButton);

    }
}

module.exports = new Header();
