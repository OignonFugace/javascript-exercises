const repeatString = function(string, num) {
    let result = (num < 0) ? 'ERROR' : '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
