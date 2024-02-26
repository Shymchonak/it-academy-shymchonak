
// const PassengerPlane = require('./passangerPlane')
const CargoPlane = require('./CargoPlane')
const AirPark = require('./AirCompany')


// const passangerPlane1 = new PassengerPlane("Passanger",4,10000,200)
// const passangerPlane2 = new PassengerPlane("Passanger",2,1000,30)
// const passangerPlane3 = new PassengerPlane("Passanger",2,5000,100)

const cargoPlane1 = new CargoPlane('Cargo',4, 20000, 200000)
const cargoPlane2 = new CargoPlane('Cargo',6, 40000, 800000)
const cargoPlane3= new CargoPlane('Cargo',2, 10000, 150000)

AirPark.addPlane(passangerPlane1)
AirPark.addPlane(passangerPlane2)
AirPark.addPlane(passangerPlane3)

AirPark.addPlane(cargoPlane1)
AirPark.addPlane(cargoPlane2)
AirPark.addPlane(cargoPlane3)


console.log(AirPark)