const findTheOldest = function(people) {
    return people.reduce((obj, item) => {
        if (!('yearOfDeath' in obj)) {
            obj.yearOfDeath = (new Date).getFullYear();
        }
        if (!('yearOfDeath' in item)) {
            item.yearOfDeath = (new Date).getFullYear();
        }
        if (item.yearOfDeath - item.yearOfBirth > obj.yearOfDeath - obj.yearOfBirth) obj = item;
        return obj;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log(!('yearOfDeath' in people[0]));
console.log(findTheOldest(people));

