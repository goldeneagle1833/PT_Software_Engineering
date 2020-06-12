const testFuction = function(){
    for (i = 0; i<10; i++){
        console.log("ten times")
    }
}

const printSum = function(){
    console.log(10 + 10)
}

//printSum()

const printTriangle = function(){
    console.log("#")
    console.log("##")
    console.log("###")
    console.log("####")
    console.log("#####")
}

//printTriangle()

const minusOne = function(num) {
    console.log(num - 1)
}

//minusOne(10)
//minusOne(100)
//minusOne(Infinity)

const makeSent = function(subject, action, noun){
    console.log("oh boy, do " + subject + " "+ action + " " + noun + " or wat")
}

//makeSent('i', "want", "chimichangas")

const getLastElement = arr => {
    console.log(arr[arr.lenth - 1])
}

//getLastElement([1,2,3,4,5,6])
//getLastElement(["a","b","c"])
//getLastElement([1,2,3,],[4,5,6])

const firstName = () => {
    return "bruce"
}

const middleName = () => {
    return "Sherwood"
}

const fullName = () => {
    return firstName + middleName + " Hawthorn"
}

console.log( fullName() )


firstName()
middleName()
fullName()

