class Hosts {
    constructor(name, occupation){
        this.name = name
        this.occupation = occupation
    }
    saySpecs(){
        console.log("my name is " + this.name + ". My occupation is " + this.occupation)
    }
    nothingSpecial(){
        console.log("i am a red shirt")
    }
}

const teddy = new Hosts("Teddy", "Enforcer")
console.log(teddy.saySpecs())

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const hostArray = []

for (let i = 0; i <= 100; i++ ){
     hostArray.push
     (new Hosts
        (names
            [Math.floor(Math.random() * names.length)], 
        occupations
            [Math.floor(Math.random() * occupations.length)]
        )
    )
}



console.log(hostArray)