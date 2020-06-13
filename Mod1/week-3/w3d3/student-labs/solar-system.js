const milkyWay = {
    type: "barred spiral" ,
    age: 13600000000,
    containsEarth: false,

}

milkyWay.containsEarth = true

console.log(milkyWay.containsEarth)

milkyWay.numberOfStars = "100-400 billion"

console.log(milkyWay)

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

console.log(solarSystem[4].moons)
console.log((solarSystem[solarSystem.length -1].moons[1]))

solarSystem[solarSystem.length -1].moons.push("endor")

for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].name === "Jupiter"){
    console.log(solarSystem[i].moons)}
}

for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].name === "Neptune"){
    console.log(solarSystem[solarSystem.length -1].moons[1])}
}

//console.log(solarSystem)

solarSystem.push(
    {
        name: "Pluto",
        ringSystem: false,
        moons: ["charon"]
    }
)
solarSystem[2].diameter = "wide"

//console.log(solarSystem)

for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].name === "Mercury"){
        solarSystem[i].ringSystem = true
    }
}

//solarSystem[0].ringSystem = true
 
//console.log(solarSystem[0])

for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].name === "Uranus"){
        solarSystem[i].moons[3] = "Oberon" 
    }
}

console.log(solarSystem[6].moons)

for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].ringSystem === true){
        console.log(solarSystem[i])
    }
}


