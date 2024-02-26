
class AirCompany {
    constructor() {
        this.airPark = []
    }
    addPlane(plane){
        this.airPark.push(plane)
    }

    getLoadCapacity(){
        let capacity = 0
        for(plane of this.airPark) {
            if(plane.planeCategory === 'Cargo'){
                capacity += plane.loadCapacity
            }
        }
        return capacity
    }
    getNumberOfSeats(){
        let seats = 0
        for (plane of this.airPark){
            if(plane.planeCategory === 'Passanger'){
                seats += plane.numberOfPassengers
            }
        }
        return seats
    }

}

module.exports =new AirCompany();