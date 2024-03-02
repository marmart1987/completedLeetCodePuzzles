/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    for (i in mat) {
        mat[i] = mat[i].reduce(function (n, val) {
            return n + (val === 1);
        }, 0);
    }
    let j = 0;
    let output = [];
    while(j < k){
        let min = Math.min(...mat);
        let index = mat.indexOf(min);        
        output.push(index);
        mat[index] = 1000;
        j++;
    }
    return output;
};