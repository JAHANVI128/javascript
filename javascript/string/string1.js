// iterable means when we have a loop we can iterate the data
// dynamic array
// index starts with 0
// subscriptable means you can access each index
// mutable means when a string is declared, you can modify with the same reference
// immutable means when a string is declared, you cannot modify it
// string is immutable

var user = "John";

// console.log(user);
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// console.log(user[4]);

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// user = user.concat(" modi")
// console.log(user)

// user = user + "patel"
// console.log(user)

// user = user += " shah"
// console.log(user)

// var c = user.charAt(2)
// console.log(c)

// user = user.toUpperCase()
// console.log(user)

// user = user.toLowerCase()
// console.log(user)

var data = "Climate change stands as one of the most pressing challenges of our time, with far-reaching consequences for ecosystems worldwide"

data = data.replace("c", "j", 10)
console.log(data)

// var flag = data.startsWith("Change") // return type boolean
var flag = data.startsWith("C") // return type boolean
console.log(flag)
console.log(data.endsWith("dwide"))