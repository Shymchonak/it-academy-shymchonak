const FlyingMachine = require('./plane')

class Helicopter extends FlyingMachine {
    constructor(planeCategory,flightRange,numberOfPassengers, loadCapacity) {
        super(planeCategory,flightRange);
        this.numberOfPassengers = numberOfPassengers;
        this.loadCapacity = loadCapacity;
    }
}


module.exports = Helicopter