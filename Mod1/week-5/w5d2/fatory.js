class Car {
    constructor(maker, serialNumber){
        this.serialNumber = serialNumber;
        this.maker = maker;
    }
    drive() {
        console.log('vroom')
    }
}


class Factory {
    constructor(company){
        this.company = company
        this.cars = []
    }
    genCar(){
        const newCar = new Car(this.company, this.cars.length)
        //console.log(newCar)
        this.cars.push(newCar)
        console.log(this.cars)

    }
}

const tesla = new Factory('tesla')
tesla.genCar()
tesla.genCar()
tesla.genCar()

console.log(tesla)