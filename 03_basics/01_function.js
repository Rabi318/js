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
console.log(message("Rabi"));  //Rabi just logged in