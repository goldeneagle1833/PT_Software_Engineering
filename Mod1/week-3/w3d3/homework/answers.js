/*
1) boolean true or False
2) string
3) object
4) array
5) array of objects
6) objects with arrays
*/

const rainbowColors = ["red", "blue", "violet", "green"]

for (let i = 0; i<rainbowColors.length; i++){
    if (rainbowColors[i] === "blue"){
        console.log("blue")
    }
}

const bruce = {
    favoriteFood: "steak",
    hobby: "running",
    town: "baltiomore",
    favoriteData: true
}
for(key in bruce){
    if(bruce[key] === "running"){
        console.log("hobby is running")
    }
}