//  Primitive
//  7 Types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id == anotherid);

const bigNumber = 356543223456123452n

//  Non Primitive

//  Array, Objects, Functions

const heros = ["superman", "batman", "wonderwomen"];
let myObj = {
    name:"calwin",
    age:21,
}

const myFunction = function() {
    console.log("Hello World !");  
}

console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherid);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);