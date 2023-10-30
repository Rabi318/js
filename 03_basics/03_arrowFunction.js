//++++++++++++++++++  this  ++++++++++++++++++++++++

const user = {
    id : 345,
    name : "Polo",
    

    welcomeMessage: function (){
        console.log(`${this.name}, Welcome to our website`);   //this refers to the current context
    }

};

// user.welcomeMessage();   //Polo, Welcome to our website
// user.name = "John";
// user.welcomeMessage();   //John, Welcome to our website



// function one(){
//     let username = "Rabi";
//     console.log(this.username);  //undefined because this is not work in the function.
// }
// one();

// const two = function (){
//     let name = "rabi";
//     console.log(this.name);        //undefined
// }
//two();


//++++++++++++++++ Arrow Function +++++++++++++

const three = () => {
    let name = "narayan";
    console.log(this.name);
}
//three();

// const addTwo = (num1, num2) => {
//     return num1 + num2 ;                      //Explicit return
// }

//const addTwo = (num1, num2) => num1 + num2 ;     //Implicit return, if we have one line return statement then we can write like this

//const addTwo = (num1, num2) => (num1 + num2) ;
const addTwo = (num1, num2) => ({user: "Rabi"}) ;   //return a object

console.log(addTwo(4,5));
