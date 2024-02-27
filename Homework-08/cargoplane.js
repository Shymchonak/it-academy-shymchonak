const FlyingMachine= require('./plane')

class CargoPlane extends FlyingMachine {
    constructor(planeCategory,flightRange, loadCapacity) {
        super(planeCategory,flightRange);
        this.loadCapacity = loadCapacity;
    }
}

module.exports = CargoPlane;


