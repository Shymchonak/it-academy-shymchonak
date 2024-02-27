
const PassengerPlane = require('./passangerplane')
const CargoPlane = require('./cargoplane')
const Helicopter = require('./helicopter')
const airpark = require('./aircompany')

const numberOfPassengersArray = [100, 200, 300, 500, 600]
const planeCategoryArray = ['Passenger', 'Cargo', 'Helicopter']
const flightRangeArray = [1000, 500, 10000, 15000, 20000, 5000]
const loadCapacityArray = [10000, 15000, 20000, 50000]
const numberOfPlanes = 15


function randomElement(array){
     let element = Math.floor(Math.random() * (array.length) )
    return array[element]
}



function getRandomPlane (){
  let element = randomElement(planeCategoryArray)
    if (element === 'Passenger'){
        let plane = new PassengerPlane(element,
            randomElement(flightRangeArray), randomElement(numberOfPassengersArray))
        return plane
    }
    if (element === 'Cargo'){
        let plane = new CargoPlane(element,
            randomElement(flightRangeArray), randomElement(loadCapacityArray))
        return plane
    }
    if (element === 'Helicopter') {
        let plane = new Helicopter(element,
            randomElement(flightRangeArray), randomElement(numberOfPassengersArray), randomElement(loadCapacityArray))
        return plane
    }
}

function fillAirCompanyByRandonPlanes(){
    for(let i = 0; i < numberOfPlanes; i++){
    airpark.addPlane(getRandomPlane())
    }
    return airpark
}

module.exports = {getRandomPlane, fillAirCompanyByRandonPlanes}