// Arrays => Stroing a collection of multiple items under a single variable


//Declration
const arr = [1,23,34,5,6,7];
const arr2 = ["rns", "ans", "ssn"];
const arr3 = new Array(1,2,3,4,5);

//access by index number
// console.log(arr[4]);


//Array Methods

// arr.push(80);         //push an element into the array
// arr.push(81);

// arr.pop();            //Delete an element from the last index

// arr.unshift(12);         //Insert the element in the first index
// arr.shift();             //Remove an element from the first index
//console.log(arr);       

// console.log(arr.includes(34));  //isPresent return the boolean value
// console.log(arr.indexOf(5));    //present in which index if not return -1

const newArr = arr2.join();       //join() method is used to convert the array into string
// console.log(arr2);
// console.log(newArr);             //string

const myArr = [1,2,3,4,5,6];

console.log("A ", myArr);             //[1,2,3,4,5,6]
const myArr2 = myArr.slice(1, 3);    //slice method doesn't manupulate the original array  
console.log(myArr2);                 //[2,3]

console.log("B ",myArr);               // [1,2,3,4,5,6]
const myArr3 = myArr.splice(1, 3);     //splice method manupulate the original array
console.log("c " , myArr);             // [1,5,6]  

console.log(myArr3);                   //[2,3,4]
