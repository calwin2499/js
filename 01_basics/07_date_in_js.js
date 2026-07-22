let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDates.toLocaleString());

// let myCreatedDateS = new Date("2026-01-23")
let myCreatedDateS = new Date("01-23-2026")
console.log(myCreatedDateS.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDateS.getTime());

console.log(Math.floor( Date.now() / 1000));


let DATE = new Date();
let indiaTimes = DATE.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata'});
console.log(indiaTimes);

let indiaTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata'});
console.log(indiaTime);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
