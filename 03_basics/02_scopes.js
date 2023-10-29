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
//console.log(a);
// console.log(b);
// console.log(c);


//Neseted Scopes

function one(){
    const name = "rabi";
    function two() {
        const webSite = "gitHub.com";
        console.log(name);
    }
    //console.log(webSite);

    two();
}

//one();


//In the below function declaration we can't access addTwo() function before initialization
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(4));


//In the below declaration we can access the addOne() function before initialization
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));