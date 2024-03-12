/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {    
    return  s = Array.from(s).sort().join() ==  Array.from(t).sort().join()
};