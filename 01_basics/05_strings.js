const name = "calwin"
const repoCount = 50

// console.log(name + repoCount +" value");     not to write like this outdated !!!

// This is the actul way to write the code !!!

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Calwin')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.indexOf('w'));
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  Calwin  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://calwin.com//calwin%20fernandes"
console.log(url.replace('%20', ' '));