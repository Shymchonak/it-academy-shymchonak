
const PassengerPlane = require('./passangerplane')
const CargoPlane = require('./cargoplane')
const Helicopter = require('./helicopter')
const Aircompany = require('./aircompany')

const numberOfPassengersArray = [100, 200, 300, 500, 600]
const planeCategoryArray = ['Passenger', 'Cargo', 'Helicopter']
const flightRangeArray = [1000, 500, 10000, 15000, 20000, 5000]
const loadCapacityArray = [10000, 15000, 20000, 50000]
const numberOfPlanes = 15


function randomElement(array){
     let element = Math.floor(Math.random() * (array.length) )
    return array[element]
}


class RandomPlane {
    createRandomPlane(category) {
        if (category === 'Passenger') {
            let plane = new PassengerPlane(category,
                randomElement(flightRangeArray), randomElement(numberOfPassengersArray))
            return plane
        }
        if (category === 'Cargo') {
            let plane = new CargoPlane(category,
                randomElement(flightRangeArray), randomElement(loadCapacityArray))
            return plane
        }
        if (category === 'Helicopter') {
            let plane = new Helicopter(category,
                randomElement(flightRangeArray), randomElement(numberOfPassengersArray), randomElement(loadCapacityArray))
            return plane
        }
    }
}

function fillAirCompanyByRandonPlanes(companyName = new Aircompany()){
    for(let i = 0; i < numberOfPlanes; i++){
        let category = randomElement(planeCategoryArray)
        let newPlane = new RandomPlane
        companyName.addPlane(newPlane.createRandomPlane(category))
    }
    return companyName
}

module.exports =  fillAirCompanyByRandonPlanes