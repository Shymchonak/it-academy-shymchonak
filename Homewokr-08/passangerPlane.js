const Plane = require('./Plane')

class PassengerPlane extends Plane {
    constructor(planeCategory,numberOfEngines,flightRange,numberOfPassengers) {
        super(planeCategory, numberOfEngines,flightRange);
        this.numberOfPassengers = numberOfPassengers;
    }

}


module.exoports = PassengerPlane