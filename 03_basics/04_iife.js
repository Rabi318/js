// Immediately Invoked Function Expression (IIFE)
//IIFEs prevent pollution of the global JS scope

//NAMED IIFE
(function chai(){
    console.log("DB Connected");
})();


//NO NAME IIFE
( (name) =>{
    console.log(`DB Connected ${name}`);
})("MySql")