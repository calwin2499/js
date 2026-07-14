// console.log( 2 == 1);
// console.log( 2 > 1 );
// console.log( 2 < 1 );
// console.log( 2 != 1);
// console.log( 2 >= 1 );

console.log( "2" > 1 );
console.log( "02" > 1 );

 
/*comparision convert null into a number the equality check operator 
works differently than the comparision operator as you can see in here as an example below */


console.log( null > 0 );  // 0 > 0 no (false) the answer given is also false
console.log( null == 0 ); // 0 == 0 yes (false) but the answer given is this works differently
console.log( null >= 0);  // the null is taken as zero in the comparision case !!! 


console.log( undefined > 0 );
console.log( undefined == 0 );
console.log( undefined >= 0 );


// strict check :-   ===

console.log( "2" === 2 );