const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));

console.log(balance.toString().length);


const otherNumber = 23.899
console.log(otherNumber.toPrecision(3));

const otherNumbers = 123.899
console.log(otherNumbers.toPrecision(3));

const otherNumberS = 1123.899
console.log(otherNumberS.toPrecision(3));

/* here as u can see above that there is a difference between the toPrecision() operation
there three types of example
*/

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

// ++++++++++ Math ++++++++++

console.log(Math);

console.log(Math.abs(-3));
console.log(Math.round(4.5));
console.log(Math.sqrt(64));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.min(2,4,6,8,10));
console.log(Math.max(2,4,6,8,10));

console.log(Math.random());

console.log(Math.round(Math.random()));

console.log((Math.random() *10 ) +1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1) + min ));
