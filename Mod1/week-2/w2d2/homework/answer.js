//////////////////
//get easy
//////////////////
for(let i = 0; i <= 20; i++){
    console.log(i)
}
//////////////////
//get even
//////////////////
for(let i = 0; i <= 200; i+=2){
    console.log(i)
}

//////////////////
//fizz
//////////////////
const div3 = "divisible by three"
const div5 = "divisible by five"
const div3and5 = div3 + " " + div5
for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(div3and5)
    } else if (i % 5 === 0){
        console.log(div5)
    } else if (i % 3 === 0){
        console.log(div3) 
    } else {
        console.log(i)
    }
}
//console.log(div3and5)


//////////////////
//wild wild life
//////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
console.log(plantee)

wolfy[3] = "Gotham City"
wolfy.splice(0 , 1, "GameBoy")
console.log(wolfy)

dart.push("Hawkins")
console.log(dart)

// yell at the Ninja Turles

//const ninjaTurtles = ["Don", "Leo", "Raph", "Mich"]
//for (of)

// I have no idea what the homework was tring to do with a for/of loop
// and trying to captlize the strings in the arry with toUpperCase makes zero sence even with some research

////////////////////
//Methods, Revisited
////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(Math.floor(favMovies.length * .5)) used to test 
/* 
console.log(favMovies[Math.floor(favMovies.length * .5) - 1])
favMovies.sort()
console.log(favMovies)//it sorted the strings in the array by alphbet yes it allterd the array
favMovies.pop()
console.log(favMovies)//it removed the last element of the array
favMovies.push("Guardians of the Galxy")
console.log(favMovies)//it pushed the new element to the array not should not sort it into the new array
// i was correct
favMovies.reverse()
console.log(favMovies)
favMovies.shift()
console.log(favMovies)//will remove the first element of the array
favMovies.splice(13,1)
console.log(favMovies)//removes the fast and the furious like the homework wanted but i didn't feel like commenting everything out 
// and i get i was supposed to use .rerverse then .shift because then the fast would be in postion 0 and shift would have taken
//the first postion
favMovies.unshift()//it undos the shift command it pushes the array one postion so long as you give it someing to add to the array
console.log(favMovies)
favMovies.splice(favMovies.length - 4, 1, "Avatar")
console.log(favMovies)
favMovies.sort()
console.log(favMovies)
*/
//favMovies.slice(10)
//console.log(favMovies) i have no clue why slice will not work

////////////////////
//wheres is wallo
////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)
console.log(whereIsWaldo.indexOf("Neff"))//there is set i am missing with the multi-dimensional array and .indexOf method
console.log(favMovies.indexOf("Jaws"))

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)

whereIsWaldo[2][1][0] = "change"
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

//////////////////
// Excited kitten
//////////////////

const cat = "Love me, pet me! HSSSS!"
const catSaying = ["cat saying 2", "cat saying 3", "cat saying 4"]
const randomCat = catSaying[Math.floor(Math.random() * catSaying.length)]

console.log(randomCat)
for(let i = 0; i <= 20; i++)
    if (i % 2 === 0){
        console.log(randomCat)
    } else {
    console.log(cat)
}


const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort((a, b) => a - b)
console.log(nums.length)
//const median = nums.sort([Math.floor(nums.length % 2)])
//console.log(median)
