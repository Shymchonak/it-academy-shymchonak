const Car = require('./car')

class Taxi extends Car{
    constructor(carClass,numberOfPassenger){
        super(carClass);
        this.numberOfPassenger = numberOfPassenger;
        this.isTaxiWithChild = false;
    }
    addKidsChairToTaxi() {
        this.isTaxiWithChild = true;
        return this;
    }
    removeKidsChairToTaxi() {
        this.isTaxiWithChild = false;
        return this;
    }
}

module.exports = Taxi