/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 0
    let max = x 

    while (true){
        let ans =  binarySearch(min,max,x)
        min = ans[0]
        max = ans[1]       
        if(!max){
            return ans;
        }        
    }
};
function binarySearch(min,max,x){
    let mid = ((min + max)/2)
    let result = Math.floor(mid**2)    
    if(result > x){
        return [min,mid] 
    }else if (result < x){
        return [mid,max]
    }
    if(result === x){return Math.floor(mid)}
}