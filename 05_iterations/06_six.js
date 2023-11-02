const coding = ["java", "python", "ruby", "javaScript"];

// coding.forEach( (e) => {
//     console.log(e);                    //java  python  ruby  javaScript
// });

// const value = coding.forEach( (e) => {
//     return e;
// })

// console.log(value);                      //undefined    forEach() not returning 

//filter

// const num = [1,2,3,4,5,,6,7,8,9];
// const newNum =  num.filter( (n) => {
//     return n > 4;
// })
// console.log(newNum);                        //[5,6,7,8,9]    filter() returning the value


const books = [
    {title: 'Book one', genre: 'Friction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Friction', publish: 1982, edition: 2005},
    {title: 'Book three', genre: 'Science', publish: 1984, edition: 2006},
    {title: 'Book four', genre: 'History', publish: 1991, edition: 2007},
    {title: 'Book five', genre: 'self-help', publish: 2000, edition: 2008},
    {title: 'Book six', genre: 'Love', publish: 2001, edition: 2009},
    {title: 'Book seven', genre: 'Science', publish: 2012, edition: 2010},
    {title: 'Book eight', genre: 'Love', publish: 2015, edition: 2011},
    {title: 'Book nine', genre: 'History', publish: 2014, edition: 2012},
    {title: 'Book ten', genre: 'Non-Friction', publish: 2020, edition: 2013},
    {title: 'Book eleven', genre: 'self-help', publish: 2023, edition: 2014},
    {title: 'Book twelve', genre: 'Friction', publish: 2007, edition: 2015},
];

const userBooks = books.filter( (b) => b.genre === 'History' );
//console.log(userBooks);
//output
// [
//     {
//       title: 'Book four',
//       genre: 'History',
//       publish: 1991,
//       edition: 2007
//     },
//     {
//       title: 'Book nine',
//       genre: 'History',
//       publish: 2014,
//       edition: 2012
//     }
//   ]

const userBooks2 = books.filter( (bk) =>{ 
    return bk.publish >= 2001  && bk.genre === 'History';
} )
console.log(userBooks2);


