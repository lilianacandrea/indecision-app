
class Person {
    //constructor
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    //methods
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// subclass extend from parent class Person
class Student extends Person {
    constructor(name , age, major) {
        // refers to the parent class
        super(name , age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    // overrride the method getDescription to include major.
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    } 
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

//instance
const me = new Traveler('Lili Candrea', 24, 'Cluj');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());