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
            //console.log(map,str,char)
            if(Object.hasOwn(map,char)){
                //console.log("Character exists!",char)
                str.push(map[char])
            }else{
                //console.log("Character doesn't exist",char)
                map[char] = hNum                
                str.push(hNum)
                hNum++
            }        
        }
        //console.log(str,str.join(" "))
        return str.join(" ")
    }
    return toUniform(s) === toUniform(t)
};