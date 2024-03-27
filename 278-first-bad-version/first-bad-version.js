/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let min = 0
        let max = n
        for (let i = 0; i < 100; i++) {
            let ans = binarySearch(min, max, isBadVersion)
           console.log(ans)

            min = ans[0]
            max = ans[1]
            if (!max) {
                return ans;
            }
        }

    };
};
/**
 * @param {number} x
 * @return {number}
 */
function binarySearch(min, max, isBadVersion) {
    let mid = Math.ceil((min + max) / 2)
    let result = isBadVersion(mid)
    if (result) {
        console.log(min >= mid - 1)
        if (min >= mid - 1) {
            return mid
        }
        return [min, mid]
    } else {
        return [mid, max]
    }
   
}