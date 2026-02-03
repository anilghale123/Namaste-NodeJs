
function calculateSum(a,b){
    const sum = a + b;

    console.log(sum);
}
const x = 'hello x';

// module.exports = {
//     x: x,
//     calculateSum: calculateSum,
// };
module.exports = {
    x,
    calculateSum,
};

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;   worked same as above

// modue.exports is actually an object {}