var age = 45
console.log("age is ", age)
console.log("type of age is ", typeof age)
console.log("age is outside the block...", age)
let per = 90
console.log("per is outside the block...", per)

{
    var age = 63
    let  per = 56
    console.log("this is block...")
    console.log("age is inside the block...", age)
    console.log("per is inside the block...", per)
}

console.log("age is outside the block again...", age)
console.log("per is outside the block again...", per)