const array = [0, 1, 2, 3, 4, 5]
const myHeros = ["batman", "superman", "aquaman"]

const array2 = new Array (1, 2, 3, 4)
console.log(array2[2]);

array.push(1)    // This will add a value to the existing array to the end of the array
array.pop()      // This will automatically remove the last value in the array 
console.log(array);

array.unshift(9)   // This adds the first value to the array 
array.shift()     // This removes the first value iin the array 
console.log(array); 

console.log(array.includes(9));
console.log(array.includes(5));

console.log(array.indexOf(9));
console.log(array.indexOf(19));
console.log(array.indexOf(4));


/*Here this methord converts it type to string that 
should be remembered as it changes from array to string */
const newArray = array.join() 
console.log(array);
console.log(newArray);


/* This is slice and splice where in slice we take the first value and 
not take the last value and that will print as it is in the array 
But in splice the first and last value both will be taken and then the 
value which u have selected will be removed from the original array see in the below EX !!*/
console.log("A ", array);
const myn1  = array.slice(1, 3)
console.log(myn1);
console.log("B ", array);
const myn2 = array.splice(1, 3)
console.log(myn2);
console.log("C ", array);