// argumests object - no longer bound with arrow functions
// daca ai nevoie de argumente trebuie sa folosesti ES5 (sintaxa nomrala de ptr.fuction)

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(55, 1, 1001));

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};  
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Lili',
    cities: ['Berlin', 'New York', 'Dublin'],
    printPlacesLived() {
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has lived in ' + city);
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);      
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplaier = {
    // numbers -array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [10, 20, 30],
    multiplyBy: 2, 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplaier.multiply()); // [1, 2, 3] * 2 => [2, 4, 6]