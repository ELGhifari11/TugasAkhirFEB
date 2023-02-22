"use strict";
class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
;
const person1 = new person('John', '30', 'male');
console.log('Hi my name is ' + person1.name + ', Im ' + person1.age + ' years old, and I identify as ' + person1.gender + '.');
