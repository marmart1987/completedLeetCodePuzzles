/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(string) {
    string = string.toLowerCase();
    let changes = 0;
    let prevLetter = string[0];
    for(let i = 1; i < string.length; i++){
        let letter = string[i];
        if(letter !== prevLetter){
          changes++;
        }
        prevLetter = letter;
    }
    return changes;

};