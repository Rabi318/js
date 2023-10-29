//const user = new Object();    //singleton object

const user ={};
user.id = "1234";
user.name = "John";
user.isLoggedIn = false
//console.log(user);
//console.log(Object.keys(user));    //[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(user));  //[ '1234', 'John', false ]

const newUser = {
    email : "john@gamil.com",
    fullname : {
        firstname:"john",
        lastname : "abhu",
    },
};

//console.log(newUser.fullname.firstname);


//object combining
const obj = {1: "a", 2: "b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = Object.assign({},obj,obj2);
// console.log(obj3);                        //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj, ...obj2};            
//console.log(obj4);

const users = [
    {
        id: 1,
        email: "1@gmail.com",
    },
    {
        id: 2,
        email: "2@gmail.com",
    }, {
        id: 3,
        email: "3@gmail.com",
    },
]

//console.log( users[1].email);