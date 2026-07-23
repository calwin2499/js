//object literals
const jsUser = {
    name: "calwin",
    age: 18,
    location: "puttur",
    email: "calwin@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

// console.log(jsUser.age);
// console.log(jsUser["lastLoggedIn"]);

// Now in the above the 2nd methord is used for this example given below
/*  now if the key which is given in the object if it is a string thta time we cant use 
this methord "console.log(jsUsers."full name");" that is why we use the square brackets with
the double quots like this EX:   console.log(jsUsers["full name"]);*/
const jsUsers = {
    name: "calwin",
    "full name": "Calwin Fernandes",
    age: 18,
    location: "puttur",
    email: "calwin@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

console.log(jsUsers["full name"]);

// Now if we want to use this symbol as a key we have to use the square brackets 
// in the function like this example given below
const mysym = Symbol("key1")  // This is how Symbol is declared

const jsUse = {
    name: "calwin",
    mysym: "myKey1",
    age: 18,
    location: "puttur",
    email: "calwin@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

console.log(jsUse.mysym); // now when we see it datatype its not Symbol 
console.log(typeof jsUse.mysym); // now it will show type is string

/* Now to fix that we have this synatx as a to show the symbol as a key in the object */
const mysyn = Symbol("key1")

const jsUs = {
    name: "calwin",
    [mysyn]: "myKey1",
    age: 18,
    location: "puttur",
    email: "calwin@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

console.log(jsUs[mysyn])
console.log(typeof jsUs[mysyn])