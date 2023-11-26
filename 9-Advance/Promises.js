// The promise object request the eventual completion (or failed) of the asynchronous operations and it's resulting value.


//Promise One
const promiseOne = new Promise( function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log('Promise consumed');
});

//Promise Two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
});

//Promise Three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Rabi", email:"rabi@gmail.com"});
    },1000)
});
promiseThree.then(function(user){
    console.log(user);
});


//Promise Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({Name:"Rabi",course:"JavaScript"});
        }else{
            reject('ERROR: Somethig went wrong');
        }
    },1000)
});
promiseFour.then((user) => {
    console.log(user);
    return user.Name  
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('Promise is completed'));

//Promise five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({Name:"Aditya",course:"JavaScript"});
        }else{
            reject('ERROR: Somethig went wrong');
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};
consumePromiseFive();

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await  response.json();
    console.log(data);
   } catch (error) {
    console.log("E : ",error);
   }
}
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((user)=>{
    return user.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));
