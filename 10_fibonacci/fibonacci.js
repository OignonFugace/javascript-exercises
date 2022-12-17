const fibonacci = function(n) {
    if (n <= 0) return 'OOPS';
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

function foo(n) {
    return 3 <= n;
}
console.log(foo("3"));