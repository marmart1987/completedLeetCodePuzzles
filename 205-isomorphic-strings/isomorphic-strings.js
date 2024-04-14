/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function toUniform (string){
        let map = {}
        let str = []
        hNum = 0
        for (i in string){
            let char = string[i]
            if(Object.hasOwn(map,char)){
                //Character exists!
                str.push(map[char])
            }else{
                //Character doesn't exist
                map[char] = hNum                
                str.push(hNum)
                hNum++
            }        
        }
        return str.join(" ")
    }
    return toUniform(s) === toUniform(t)
};