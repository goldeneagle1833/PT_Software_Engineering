const adventurer = {
    name: "timothy",
    hitpoints: 10,
    belogingings: ["sword", "potion", "Tums"],
    companion: {
        name: "velma",
        type: "bat",
        companionOfCompanion: {
            name: "Tim",
            type: "Parasite",
            belogingings: ["scuba", "rogan", "health"]
        }
    },
    companion2: {
        name: "bub",
        type: "dog"
    }
}

//console.log(adventurer.companion.name)
adventurer.companion.name = "susan"
//console.log(adventurer.companion.name)

console.log(adventurer.companion.companionOfCompanion.belogingings[adventurer.companion.companionOfCompanion.belogingings.length -1])

//console.log(adventurer)
