const movie = {
    title: "l'avventure",
    director: "michelanglo",
    year: 1960
}
 for (let key in movie){
     console.log([key]);
 }

 console.log(Object.keys(movie));

 const keys = Object.keys(movie)

 for (let i=0; i< keys.length; i++){ 
     console.log(movie[keys[i]])
 }


