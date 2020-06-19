const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl'];
const test = "bob"
minions.forEach((here)=> console.log(here += ' - here'))

const capitlaizedMinoins = minions.map(cap => {
    
    return cap.charAt(0).toUpperCase() + cap.slice(1)
})

console.log(capitlaizedMinoins)


const isCapitalized = (minions, capitlaizedMinoins) => minions === capitlaizedMinoins

console.log(minions.every(isCapitalized))

//////
//sort
//////

const sortFun = (a,b)=>{
    return a.length - b.length
}

console.log(minions.sort(sortFun))