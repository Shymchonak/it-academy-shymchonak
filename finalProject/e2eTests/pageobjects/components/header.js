const Base = require('../base');

class Header extends Base {
  get enterButton() {
    return $('.h-drop.h-user:nth-child(3) .h-drop__head');
  }

  get personalAreaButton() {
    return $$('.h-drop__head')[3];
  }
}

module.exports = new Header();
