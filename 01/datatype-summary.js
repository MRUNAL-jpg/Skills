
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["thor", "iornman", "superman"];
let myObj = {
    name: "Mrunal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) , Heap (Non-Primitive)

let myyoutubename ="Mrunal.js"

let anothername = myyoutubename

anothername = "Mru.php"

console.log(myyoutubename);
console.log(anothername);


let userOne = {
    email: "mru@gmail",
    upi: "mru@ybl"

}

let userTwo = userOne
userTwo.email = "sam@gmail"
userTwo.upi = "sam@ybl"


console.log(userTwo.email,userTwo.upi);
console.log(userOne.email,userOne.upi);