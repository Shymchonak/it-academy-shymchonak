const Plane= require('./plane')

class CargoPlane extends Plane {
    constructor(planeCategory,flightRange, loadCapacity) {
        super(planeCategory,flightRange);
        this.loadCapacity = loadCapacity;
    }
}

module.exports = CargoPlane;


