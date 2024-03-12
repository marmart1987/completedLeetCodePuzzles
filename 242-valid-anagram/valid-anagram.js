/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = Array.from(s)
    t = Array.from(t)
    if(s.length !== t.length){return false}
    for ( i in s){
      let index = t.indexOf(s[i])
      //console.log(index)
      if( index === -1){
        return false
      }else{
        t.splice(index,1)
      }
      //console.log(s,t)
    }
    return true
};