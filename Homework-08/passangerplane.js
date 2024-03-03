const FlyingMachine = require('./Plane')

class PassengerPlane extends FlyingMachine {
    constructor(planeCategory,flightRange, numberOfPassengers) {
        super(planeCategory,flightRange);
        this.numberOfPassengers = numberOfPassengers;
    }
}


module.exports = PassengerPlane;