let myArray = ["corgi", "chef", "Troy", "Reload"];

function popShift(arr){
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(myArray));