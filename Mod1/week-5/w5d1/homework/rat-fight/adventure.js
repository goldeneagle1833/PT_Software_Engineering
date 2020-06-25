class Hero {
    constructor(name){
        this.name = name
        this.health = 100
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = [
            "pizza",
            "calories"
        ]
    }
    talkSass(){
    console.log(this.catchPhrases[Math.round(Math.random() * 1)])
    }
    healthCheck(){
       console.log(this.health)
    }
    fight(rat){
        console.log(this.health - rat.weapons.stars)
    }
}
const doug = new Hero("doug")
class Enemy {
    constructor(name){
        this.name = name,
        this.health = 100
        this.weapons = {
            stars: 5,
            grease: 10
        }
        this.catchPhrases = 
        [
            "famous",
            'sewer'
        ]
    }
    talkSmack(){
        console.log(this.catchPhrases[Math.round(Math.random() * 1)])
    }
    healthCheck(){
        console.log(this.health)
    }
    fight(doug){
        console.log(this.health - doug.weapons.sprinkleSpray)
    }
}
const rat = new Enemy("rat")
doug.talkSass()
rat.talkSmack()
doug.healthCheck()
rat.healthCheck()
doug.fight(rat)
rat.fight(doug)