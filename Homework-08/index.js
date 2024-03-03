
const PassengerPlane = require('./passangerplane')
const CargoPlane = require('./cargoplane')
const airpark = require('./aircompany')
const  fillAirCompanyByRandonPlanes = require('./randomplane')

//Заполнеение конкретными аппаратам компании
// const passangerPlane1 = new PassengerPlane("Passanger",2000,200)
// const passangerPlane2 = new PassengerPlane("Passanger",500,30)
// const passangerPlane3 = new PassengerPlane("Passanger",1000, 100)
//
// const cargoPlane1 = new CargoPlane('Cargo',10000, 20000)
// const cargoPlane2 = new CargoPlane('Cargo',15000, 80000)
// const cargoPlane3= new CargoPlane('Cargo',8000, 15000)
//
// airpark.addPlane(passangerPlane1)
// airpark.addPlane(passangerPlane2)
// airpark.addPlane(passangerPlane3)
//
// airpark.addPlane(cargoPlane1)
// airpark.addPlane(cargoPlane2)
// airpark.addPlane(cargoPlane3)


//Рандомное моделирование компаний

let first
let second
let pervayaCompaniya = fillAirCompanyByRandonPlanes(first)
let pervayaVtorya = fillAirCompanyByRandonPlanes(second)
//
// console.log(pervayaCompaniya)
// console.log(pervayaVtorya)
//


//Сортировака по Дальности полета
// console.log(pervayaCompaniya.sortByFlightRange())
// console.log(pervayaVtorya.sortByFlightRangeReverted())

// //Сортировака по количеству мест
// console.log(pervayaCompaniya.sortByNumberOfPassengers())
//
// //Сортировака по грузоподъемности
// console.log(pervayaCompaniya.sortByCapacity())
//
// //Получение Полной грузоподъемности и мест
// console.log(pervayaCompaniya.getLoadCapacity())
// console.log(airpark.getNumberOfSeats())


//
// console.log(pervayaCompaniya.sortByCapacityHigher(18000, 50000 ))

console.log(pervayaCompaniya.sortByFlightRangeHigher(20000))
console.log(pervayaVtorya.sortByFlightRangeHigher(20000))