const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2) );

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++maths+++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8 ));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))

// Math.random humesha 0-1 ke beech ki value deti h.

// math.floor zero value dega uss case ko avoid krne ke liye plus 1 add krna pddta h.
//It means hume value 1 se upr chahiye kitna bhi ho skta h to voh value 1-9 ke bich me dega.
