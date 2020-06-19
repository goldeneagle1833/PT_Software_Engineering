const iceCreams = ['vinilla' , "Chocplate"]
const originalArray =[2, 4, 6, 8, 10,]

const updatedIceCreams = iceCreams.map(flavor => console.log(flavor))



const newOriginalArray = originalArray.map(elem => {
    return elem * 2;
})

console.log(newOriginalArray)

