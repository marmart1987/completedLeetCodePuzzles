/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (i in words) {
        
        if (words[i] == words[i].split('').toReversed().join('')) {
            return words[i];
        }
    }
    return ""
};