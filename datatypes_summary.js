// # primitive datatpye 

// there are 7 caetgory of primitive datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
 
const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('124')
const anotherId = Symbol('124')

console.log(id === anotherId); 

// const bigNumber = 2876787664533n


// # Reference (Non primitive)
 // Array, Objects, Functions.

 const heros = ["shaktiman", "naaraj", "doga"];
 let myObj = {
    name: "Nivedita",
    age: 19,
 }

 const myFunction = function(){
    console.log("hello world");
 }

//  console.log(typeof bigNumber);
//  console.log(typeof  outsideTemp);
//  console.log(typeof   scoreValue);
//  console.log(typeof  myFunction);
//  console.log(typeof heros);
     console.log(typeof  anotherId);
