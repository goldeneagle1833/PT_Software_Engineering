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

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }



console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
console.log(crazyObject.larry.characters[2].favourtieHobby)
console.log(crazyObject.larry.nicknames[1])
 
for (key in crazyObject.larry.characters[1]){
    if(key === "name") {
        console.log(crazyObject.larry.characters[1])
    }
  }

crazyObject.larry.quotes.push("new quote")

console.log(crazyObject.larry.quotes)