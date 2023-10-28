const marvel_heros = ["Ironman", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Flash"];

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);          //[ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heros[3][2]);    //Flash

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);                  //[ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]

// const all_heros2 = [...marvel_heros, ...dc_heros];
// console.log(all_heros2);                    //[ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]

// console.log(Array.isArray("Rabi"));            //false
// console.log(Array.from("Rabi"));               //[ 'R', 'a', 'b', 'i' ]

let score1 = 120;
let score2 = 345;
let score3 = 567;
console.log(Array.of(score1, score2, score3));         //[ 120, 345, 567 ]