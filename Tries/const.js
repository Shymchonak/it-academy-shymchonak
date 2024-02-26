function Car(color, brand, model) {
    this.color  = color;
    this.brand = brand;
    this.model = model;
    this.numberOfWheel = 4;
    this.setWheels = function (numberOfWheels) {
        this.numberOfWheel = numberOfWheels
    }
    return this
}

console.log(new Car('white', "bmw", '510i'))

console.log(new Car('black', "toyota", 'camry'))

const nissan = new Car('red', 'nissan', 'RX')
nissan.setWheels(10)
console.log(nissan)

function inherit(child, parent) {
    child.prototype = new parent;
}

let childCar = {}

inherit(childCar, Car)

console.log(childCar)