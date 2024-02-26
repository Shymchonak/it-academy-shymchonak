
class Aircompany {
    constructor() {
        this.airPark = []
    }
    addPlane(plane){
        this.airPark.push(plane)
    }

    getLoadCapacity(){
        let capacity = 0
        for(let plane of this.airPark) {
            if(plane.planeCategory === 'Cargo'){
                capacity += plane.loadCapacity
            }
        }
        return capacity
    }
    getNumberOfSeats(){
        let seats = 0
        for (let plane of this.airPark){
            if(plane.planeCategory === 'Passanger'){
                seats += plane.numberOfPassengers
            }
        }
        return seats
    }

    sortByFlightRange() {
       return this.airPark.sort((a,b) => a.flightRange > b.flightRange ? 1 : -1)
    }

}

module.exports =new Aircompany();