setTimeout(() => {
  console.log('oh... hi')  
},4000 );

const socky = () => {
    console.log("socky")

}

socky()

const foodie =( ) => {
    console.log("foodie")
}

const pr =()=> {
    console.log("pr")
}
setTimeout(socky,1000)
foodie()
pr()

function boss(func){
    console.log("boss")
}