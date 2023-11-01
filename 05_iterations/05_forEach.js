const coding = ['js', 'python', 'java', 'ruby'];

// coding.forEach(function (item) {            //call back function
//     console.log(item);
// });

// coding.forEach( (e) => {
//     console.log(e);
// })

// function printme(item){
//     console.log(item);      
// }
// coding.forEach(printme);

const myCoding = [
    {
        languageName: 'javascript',
        fileName: 'js',
    },
    {
        languageName: 'java',
        fileName: 'java',
    },
    {
        languageName: 'Python',
        fileName: 'py',
    }
]

myCoding.forEach((i) => {
    console.log(i.fileName);
});