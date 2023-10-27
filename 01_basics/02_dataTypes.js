//alert("hello");  //We are using nodejs, not browser
// code readability should be high
let name="Rabi";
let age=23;
let isLoggedIn=true;
let state;

console.log(age);
console.log(typeof age);

//primitive datatypes
//number => 2^53 range
//bigInt
//String => "",'',``
//boolean => true/false
//null => standalone value, empty value
// undefined => not assigned any value to the variable
//symbol
const id=Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false, return value is not same


//non-primitive (Reference type)datatypes
//objects, array, functions

const name1=["rabi", "ram", "shyam"]; //array

let student ={
    name:"rabi",
    age : 21,
    branch: "MCA",
}                 //Objects

//function
const myFun=function (){
    console.log("Hello World");
}