const num = [1,2,3,4,];
// const newNum =   num.map( (num) => num + 10);
//console.log(newNum);                         //[11,12,13,14]


//method chaining
const myNum = [1,2,3,4,5];
const newMyNum = myNum
                 .map( (num) => num * 2)
                 .map((num) => num + 1)
                 .filter((num) => num >= 5);
console.log(newMyNum);                         //[5,7,9,11]

