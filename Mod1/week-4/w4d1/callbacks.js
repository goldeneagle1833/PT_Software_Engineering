const peramLog = (log) => console.log(log)


const hiFunc = () => {
    console.log("hi")
}

peramLog(hiFunc)


const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');

// lins 11 to 19 should log hi because bar is the console.log as param and hi is param2 is giting logged

const baz = (param) => {
    console.log(param.toUpperCase());
} 

foo(baz, 'hello')

// should log Hello
// i was wrong HELLO because i thought the .toUpperCase was just the first letter

const electricMixer = (attachment) => {
    console.log("this is now:" + attachment())
}

electricMixer(() =>{
    return "spiralizing"
})
