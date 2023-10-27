//stack memory stores primitive data types. It provides a copy of original value.

let email="rabi@gmail.com";  
let anotherEmail = email;     

anotherEmail="user@google.com";  
// console.log(email);
// console.log(anotherEmail);

//Heap memory stores non-primitives data types. It provides a reference of original value.
let student={
    name:"rabi",
    roll:"12",
    branch: "CSE",
};

let student1=student;
student1.name = "Narayan";
console.log(student.name);
console.log(student1.name);