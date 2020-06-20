const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

/////////
// every
/////////

const equalZero = (currentValue) => currentValue >= 0

console.log(nums.every(equalZero))

const shorter8 = (word) => word.length < 8

console.log(panagram.every(shorter8))

//////////
// filter
//////////

const lessThanFour = num => num < 4

console.log(nums.filter(lessThanFour))

const wordlength = word => word.length % 2 === 0 

console.log(panagram.filter(wordlength))

///////
// find
///////

const div5 = five => five % 5 === 0

console.log(nums.find(div5))

const long5 = five => five.length > 5

console.log(panagram.find(long5))

// there isnt a workd longer than 5 char so nothing satifies the condition it gets loged as undefined because 
// nothing can make the arument true

///////////
// find index
///////////

const indexDiv3 = div => div % 3 === 0

console.log(nums.findIndex(indexDiv3))

const lessThan5 = word => word.length < 5

console.log(panagram.findIndex(lessThan5))
// homework wants less than 2 but it would be undefined

/////////
// forEach
/////////

const times3 = num => console.log(num * 3)

nums.forEach(times3)
//onsole.log(newNums)
//nums.forEach(ele => console.log(ele * 3))

const addBang = add => console.log(add +"!")

panagram.forEach(addBang)
//console.log(newPanagram)
console.log(panagram)
////////////
// thought
///////////
// it makes a new array

////////////
// map
////////////
 
const nums100 = nums.map(a => a * 100)

console.log(nums100)

const panagramUpper = panagram.map(a => a.toUpperCase())

console.log(panagramUpper)