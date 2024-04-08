/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let len = 0
    let i = s.length-1
    while (true){
        if(s[i] === " " || i === -1){
            return len
        }else{
            len++
        }
        i--
    }
};