const crayonBox = {
    names : ["blue", "green", "white", "black"]
}

const bottle = {
    cap: {
        mat: "metal",
        color: "silver",
        logo: "star"
    }
}

console.log(bottle.cap.color)

const receipt = [
    {name: "Bruce", price: 23.99},
    {name: "Bob", price: 25.99}
]

const apartmentBuilding =[
    'lux apartments', 'tux apartments', ["helga", 'lisa', 'rachel', 'garrett']
]
 console.log(apartmentBuilding[2][1])

knit = () => {}

const addfun = (a, b) => a + b
const subfun = (a, b) => a - b
const mulifun = (a, b) => a * b
const divfun = (a, b) => a / b
const calfun = (a, b, operates) => a + b / operates

console.log(calfun(2,2,addfun(2,2)))
console.log(calfun(2,2,subfun(2,2)))
console.log(calfun(2,2,mulifun(2,2)))
console.log(calfun(2,2,divfun(2,2)))



const bar = () => console.log('bar here');

bar()



const foo = () => console.log('foo here');

foo()

