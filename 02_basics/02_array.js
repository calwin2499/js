const marvel_Heros = ["Thor", "Ironman", "Spiderman"]
const dc_Heros = ["Superman", "Batman", "Aquaman"]

marvel_Heros.push(dc_Heros)

console.log(marvel_Heros);
console.log(marvel_Heros[3][1]);

const myHeros = marvel_Heros.concat(dc_Heros)
console.log(myHeros);

// This is another technique used to clean the array called "spread"
const newHeros = [...marvel_Heros, ...dc_Heros]
console.log(newHeros);

// This is another technique used to clean the array called "flat"
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("Calwin"));
console.log(Array.from("Calwin"));

/* For this we have to tell the array if it should take the keys and do a array 
or it should take values and do a array */ 
console.log(Array.from({name: "calwin" }));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
