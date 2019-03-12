let gWords = {
    giraffe: "long neck",
    giant: "big",
    grass: "green",
    gas: "light"
}

delete gWords.giraffe;

console.log(JSON.stringify(gWords, null, 4));