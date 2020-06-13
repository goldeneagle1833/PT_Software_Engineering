const me = {
    firstName: "bruce",
    lastName: "hawthorn",
    age: 26,
    email: "email@gmail.com",
    "place of residence": "baltimore"
}
console.log(me.firstName)
me.age = 100
console.log(me.age)
console.log(me)

const fancyGreeting = (me) => {
    console.log(me)
}
