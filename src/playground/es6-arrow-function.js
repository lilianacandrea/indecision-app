const square = function(x) {
    return x * x;
};

// const sqaureArrow = (x) => {
//     return x * x
// };
const sqaureArrow = (x) => x * x;

console.log(square(8));
console.log(sqaureArrow(5));

// Challenge: 
// getFirstName()
// Create regular arrow function using shorthand syntax 

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Daria Popa'));
