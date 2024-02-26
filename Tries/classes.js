
class Car {
    constructor(color,brand,model){
        this.color  = color;
        this.brand = brand;
        this.model = model;
        this.numberOfWheel = 4;
    }
    setWheels = function (numberOfWheels) {
        this.numberOfWheel = numberOfWheels
    }
}

console.log(new Car('white', "bmw", '510i'))