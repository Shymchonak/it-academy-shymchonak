const Plane = require('./Plane')

class PassengerPlane extends Plane {
    constructor(planeCategory,flightRange, numberOfPassengers) {
        super(planeCategory,flightRange);
        this.numberOfPassengers = numberOfPassengers;
    }
}


module.exports = PassengerPlane;