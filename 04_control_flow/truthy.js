const email = [];

if(email){
    console.log("Got user email");             
}else{
    console.log("Dont have user email");
}

//+++++++++++++++++++  falsy values  +++++++++++++

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//+++++++++++++++++++  truthy values  +++++++++++++

//"0", 'false', " ", [], {}, function(){}

// if(email.length === 0){
//     console.log("Email array is empty");
// }

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Opearator (??) : null undefined
let val1 ;
//val1 = 5 ?? 10;              //5
// val1 = null ?? 10           //10
// val1 = undefined ?? 15;     //15
val1 = null ?? 10 ?? 15;      //10
console.log(val1);

//Terniary Operator

//condition ? true : false;   //syntax
const leamonTea = 100;
leamonTea >= 80 ? console.log("Greater than 80") : console.log("Less than 80");


