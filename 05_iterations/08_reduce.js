const arr = [1,2,3,4,5];

// const myNum = arr.reduce(function (acc, curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr;
// }, 0);
// console.log(myNum);
//output
// acc: 0 and curr: 1
// acc: 1 and curr: 2
// acc: 3 and curr: 3
// acc: 6 and curr: 4
// acc: 10 and curr: 5
// 15

//Using arrow function

const Mynum = arr.reduce( (acc, curr) => acc + curr,0);
//console.log(Mynum);                                       //15

const shoppingCart = [
    {
        itemName: "js",
        price: 2999,
    },
    {
        itemName: "java",
        price: 3999,
    },
    {
        itemName: "python",
        price: 2555,
    },
]

const myShopping = shoppingCart.reduce( (acc,item) => acc + item.price,0);
console.log(myShopping);