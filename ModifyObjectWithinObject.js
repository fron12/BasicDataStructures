let myObject = {
    food: "snack",
    cup: "green",
    wallet: {
        color: "black",
        pockets: 5,
        money: {
            ones: 2,
            fives: 1,
            tens: 1,
            twenties: 4,
            hundreds: 1
        }
    }
}

// change ones in money object to 5.

// myObject.wallet.money.ones = 5; // dot notation
myObject["wallet"]["money"]["ones"] = 5; // bracket notation

console.log(JSON.stringify(myObject, null, 3));