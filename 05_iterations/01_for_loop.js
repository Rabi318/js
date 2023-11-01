//for 


// for (let i = 0; i <= 10; i++) 
// {
//     const element = i;  
//     if(element == 5){
//         console.log("5 is best");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 1; j <= 3; j++) {
        
//         //console.log(`Innter loop values: ${j}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }

// const arr = ["flash", "batman", "superman"];  //loop in array
// for(let i = 0; i < arr.length; i++){
//     console.log(`super hero ${arr[i]}`);
//}

// break and continue

// for(let i = 1 ; i <= 20 ; i++){

//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for(let i = 1 ; i <= 8 ; i++){

    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}
