//Object Literals

const mySym = Symbol('ker1');
const user = {
    "first name": "Rabinarayan",
    "last name" : "sahoo",
    age : 18,
    [mySym] : "mykey1",
    location : "Odisha",
    email: "rabi@gmail.com",
    greeting : function (){
        console.log(`Good evening ${this["first name"]}`);
    },
   
};

// console.log(user.age);              //access the object value
// console.log(user["first name"]);      //access the object value
//console.log(user[mySym]);              //symbol

// user.email = "rns@gmail.com";       //change the value
// console.log(user["email"]);

// Object.freeze(user);                 //we can not change the value of an object after freeze declared
// user.email = "becoder@gmail.com";
// console.log(user);



console.log(user.greeting());     //access the function inside the object