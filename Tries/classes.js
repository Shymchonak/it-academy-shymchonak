
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

class NewCar extends Car {
    #maxSpeed;
    constructor(color,brand,model,maxSpeed) {
        super(color,brand,model);
        this.#maxSpeed = maxSpeed
    }
    getMaxSpeed  () {
        return this.#maxSpeed;
    }
}

console.log()
class NewNewCar extends NewCar {
    constructor(color,brand,model,maxSpeed) {
        super(color,brand,model,maxSpeed)

    }

}
const newCar = new NewCar('white', "bmw", 'X5', 400)

console.log(newCar.getMaxSpeed())


console.log(new NewCar('white', "bmw", 'X5', 200))