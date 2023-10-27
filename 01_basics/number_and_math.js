//+++++++++++++  Numbers ++++++++++

const score = 500;
const balance = new  Number(120);
// console.log(score);    //500
// console.log(balance);  //[Number: 120]

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));         //120.00

const num = 155.85666;
//console.log(num.toPrecision(3)); //156

const zero = 1000000;
// console.log(zero.toLocaleString());          //1,000,000
// console.log(zero.toLocaleString('en-IN'));  //10,00,000


//+++++++++++++ Maths  +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-61));  //It convert negative numbers into positive
// console.log(Math.round(45.7));  //46
// console.log(Math.round(45.2));  //45
// console.log(Math.ceil(45.2));      //It round up the number to upper number
// console.log(Math.floor(45.7));     //45

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
