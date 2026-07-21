let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDates.toLocaleString());

