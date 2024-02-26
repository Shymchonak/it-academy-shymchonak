const Plane = require('./Plane')

class CargoPlane extends Plane {
    constructor(planeCategory,numberOfEngines,flightRange,loadCapacity) {
        super(planeCategory, numberOfEngines,flightRange);
        this.loadCapacity = loadCapacity
    }
}



module.exoports = CargoPlane