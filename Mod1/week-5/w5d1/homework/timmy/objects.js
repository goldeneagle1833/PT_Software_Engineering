class Hamster {
    constructor(owner, name){
        this.owner = owner
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log("squeak")
    }
    eatFood(){
        console.log("nibble")
    }
    getPrice(){
        return price
    }
}
class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age 
    }
    getWeight(){
        return this.weight
    }
    greet(){
        return "hello " + this.name
    }
    eat(){
        if(this.weight < 10){
            this.weight + 1 && this.mood + 1
        }
    } 
    exercise(){
        if(this.weight === 10){
            this.weight - 1
        }
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount + 10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood + 10
        this.bankAccount - this.getPrice 
    }
}
const timmy = new Person("Timmy")
const ham = new Hamster("timmy", "Hamstar")
timmy.buyHamster(ham)
timmy.exercise()
console.log(timmy.greet())

