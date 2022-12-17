// PREMIERE SOLUTION
// const sumAll = function(m, n) {
//     return n*(n+1)/2 - m*(m-1)/2;
// };


// SECONDE SOLUTION
const sumAll = function(m, n) {
    if (m < 0 || n < 0 || !Number.isInteger(n) || !Number.isInteger(m)) return 'ERROR';
    let sum = 0;
    if (m > n) {
        const tmp = n;
        n = m;
        m = tmp;
    }
    if (m <= n) {
        for (let i = m; i <= n; i++) {
            sum += i;
        }
    } 
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
