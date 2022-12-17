const palindromes = function (string) {
    const regEx = /^[0-9a-zA-Z]+$/;
    string = string.split('');
    string = string.filter(char => char.match(regEx));
    string = string.map(char => char.toLowerCase());
    return string.every((element, index) => {
        return string[string.length - index-1] === element;
    });
};

// Do not edit below this line
module.exports = palindromes;
