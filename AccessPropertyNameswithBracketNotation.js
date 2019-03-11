let yWords = {
    young: 2,
    yes: 1,
    yell: 3,
    yellow: 5
}

// function getWord(word){
//     return yWords[word];
// }

getWord = (word) => yWords[word];

console.log(getWord("yellow"));