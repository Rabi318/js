//var and let create variables that can be reassigned another value
//const creates "constant" variables that cannot be reassigned another value.
//While let and const are block-scoped, var declarations are either globally scoped or function-scoped.

let a = 10;
const b = 20;
var c = 30;

if(true){
    let a =245;
    console.log("A ",a);
}
console.log(a);
// console.log(b);
// console.log(c);