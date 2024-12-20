/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";    
    for(i = 0; i < strs[0].length;i++) {
        let letter = strs[0][i];        
        for(let j = 1; j < strs.length; j++){
           if(strs[j][i] !== letter){
               return prefix;
           }
        }
        prefix += letter;      
    }
    return prefix;
};