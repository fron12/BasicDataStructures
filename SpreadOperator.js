let arrayOne = ["ox", "orange", "oppossum", "orchard"];

let arrayTwo = [...arrayOne]; // copies entire array of arrayOne to arrayTwo

// console.log(arrayTwo);

let arrayThree = [];

for(let i = 0; i < arrayOne.length; i++){
    arrayThree.push(arrayOne[i]);
}

let arrayFour = [...arrayThree];
// console.log(arrayThree);
// console.log(`This is [${arrayFour}]`);

let arrayFive = ["Fire", "Fox", ...arrayOne, "Fix", "Fang"]; // copies entire arrayOne array into third index of arrayFive

console.log(arrayFive);