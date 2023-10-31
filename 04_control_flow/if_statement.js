//if

const isLoggedIn = true;
const temp = 42;

// if (temp < 50) {
//     console.log("Less than 50");
// }else{
//     console.log("Greater than 50");
// }

// const score = 200 ;
// if (score > 100) {
//     let power = 'fly';
//     console.log(`User power : ${power}`);
// } 
// console.log();console.log(`User power : ${power}`);    //power is not defined, this is because of scope

const balance = 1000;
// if(balance > 500) console.log("yes"); 

// if (balance < 500) {
//     console.log("Less than 500");        //false
// }else if(balance < 750){
//     console.log("Less than 750");       //false
// }else if(balance < 900){   
//     console.log("Less than 900");       //false
// }else{
//     console.log("Less than 1200");       //true
//}

const account  = true;
const debitCard = true;
if (account && debitCard) {
    console.log("Allow for Tranaction");
}

const loggedInByEmail = true;
const loggedInByNumber = false;
if (loggedInByEmail || loggedInByNumber) {
    console.log("User logged in");
}