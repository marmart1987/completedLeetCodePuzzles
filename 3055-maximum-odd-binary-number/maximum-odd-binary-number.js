/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let numOfOnes = 0
    let letters = []
    for (i in s){
        let letter = s[i];
        if(letter === '1'){
        numOfOnes++;
        }
        letters.push(0)
    }
    letters[letters.length -1] = 1
    numOfOnes--;
    console.log(numOfOnes,letters)
    let position = 0;
    for(let i = numOfOnes; i > 0; i--){
      letters[position] = 1
      position ++;
    }
    return letters.join("")
};