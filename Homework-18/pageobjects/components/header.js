const Base = require('../base')

class Header extends Base {

    get enterButton() {
    return $('.h-drop.h-user:nth-child(3) .h-drop__head')
    }
}

module.exports = new Header();