const Base = require('../../page_object/base')

class RightSideMenu extends Base {

    markDiscountCheckBox(number){
        cy.get('.filter-header.filter-header_checkbox .inp-box__view').eq(number).click();
    }


}

module.exports = new RightSideMenu();
