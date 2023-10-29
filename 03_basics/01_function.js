function say() {
    console.log("Hello");
}

//say();     //function execution


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(2,5);


function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 +  num2;
}

// const result = addTwoNumbers(5,6);
// console.log(result);

function message(username = 'Dear'){
    return `${username} just logged in`;
}

// console.log(message());  //Dear just logged in
//console.log(message("Rabi"));  //Rabi just logged in


function calculateCartPrice (...num){           //... rest operator,it is used when we don't know how many parameters are come
    return num;
}
//console.log(calculateCartPrice(213,34,567,578));      //[ 213, 34, 567, 578 ]

const saree = {
    color : "red",
    price : 2000,
};

function handleObject (object){
    console.log(`Saree color is ${object.color} and price is ${object.price}`);
}
// handleObject(saree);
handleObject({
    color:"Yellow",
    price:1500,
})

const arr = [100,200,300,400];
function handleArray(getArray){
    return getArray[3];
}

console.log(handleArray(arr));