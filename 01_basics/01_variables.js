const account_Id = 144232
let accountEmail= "calwin@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"

let accountState;

// account_Id = 2 // not allowed

console.table([account_Id , accountEmail , accountPassword , accountCity , accountState]);

accountEmail = "cal@cal.com"
accountPassword = "789101"
accountCity = "Mangaluru"


/*
Preffer not to use var
Because of block scope and functional scope
*/

console.table([account_Id , accountEmail , accountPassword , accountCity , accountState]);
