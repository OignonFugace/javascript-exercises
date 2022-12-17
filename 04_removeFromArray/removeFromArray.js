// PREMIERE SOLUTION

// const removeFromArray = function(array, ...itemsToRemove) {
//     let arrayCopy = Array.from(array);
//     for (let itemToRemove of itemsToRemove) {
//         for (let i = arrayCopy.length - 1; i >= 0; i--) {
//             if (arrayCopy[i] === itemToRemove) {
//                 arrayCopy.splice(i, 1);
//             } 
//         }
//     }
//     return arrayCopy;
// };


// SECONDE SOLUTION

// const removeFromArray = function(array, ...itemsToRemove) {
//     return array.filter(element => {
//         let isAppended = true;
//         itemsToRemove.forEach(itemToRemove => {
//             if (element === itemToRemove) {
//                 isAppended = false;
//             }
//         })
//         return isAppended;
//     })
// };

// TROISIEME SOLUTION

// const removeFromArray = function(array, ...itemsToRemove) {
//     const output = [];
//     array.forEach(element => {
//         let isAppended = true;
//         itemsToRemove.forEach(itemToRemove => {
//             if (element === itemToRemove) {
//                 isAppended = false;
//             }
//         });
//         if (isAppended) {
//             output.push(element);
//         }
//     });
//     return output;
// };


// revisitons nos solutions avec la methode Array.includes().
// QUATRIEME SOLUTION 

const removeFromArray = function(array, ...itemsToRemove) {
    return array.filter(element => !itemsToRemove.includes(element));
};


// CINQUIEME SOLUTION

// const removeFromArray = function(array, ...itemsToRemove) {
//     const output = [];
//     array.forEach(element => {
//         if (!itemsToRemove.includes(element)) output.push(element);
//     });
//     return output;
// }


// const array = [1, 2, 3, 4];
// const itemsToRemove = [2, 3];

// console.log(array);
// console.log(removeFromArray(array, ...itemsToRemove));


// Do not edit below this line
module.exports = removeFromArray;
