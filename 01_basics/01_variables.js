const accountId=12;
let accountEmail="rabi@gmail.com";
var accoutnPassword="1234";
accountCity="BBSR";

//accountId=2;  //Not allowed 

accountEmail="rns@gmail.com";
accoutnPassword="0987";
accountCity="Bhubaneswar";
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accoutnPassword, accountCity]);