class Plane {
    constructor(planeCategory,numberOfEngines,flightRange, fuelQuantity) {
        this.planeCategory = planeCategory;
        this.numberOfEngines = numberOfEngines;
        this.flightRange = flightRange;
    }
    setFuelQuantity(fuelQuantity){
        this.fuelQuantity = fuelQuantity;
    }
}



module.exoports =  Plane