
const PassengerPlane = require('./passangerplane')
const CargoPlane = require('./cargoplane')
const airpark = require('./aircompany')


const passangerPlane1 = new PassengerPlane("Passanger",2000,200)
const passangerPlane2 = new PassengerPlane("Passanger",500,30)
const passangerPlane3 = new PassengerPlane("Passanger",1000, 100)

const cargoPlane1 = new CargoPlane('Cargo',10000, 200000)
const cargoPlane2 = new CargoPlane('Cargo',15000, 800000)
const cargoPlane3= new CargoPlane('Cargo',8000, 150000)

airpark.addPlane(passangerPlane1)
airpark.addPlane(passangerPlane2)
airpark.addPlane(passangerPlane3)

airpark.addPlane(cargoPlane1)
airpark.addPlane(cargoPlane2)
airpark.addPlane(cargoPlane3)


console.log(airpark)

console.log(airpark.sortByFlightRange())

console.log(airpark.getLoadCapacity())
console.log(airpark.getNumberOfSeats())