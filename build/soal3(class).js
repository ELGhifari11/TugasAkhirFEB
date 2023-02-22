"use strict";
class Animall {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
;
class Rabbit extends Animall {
    eat() {
        console.log(this.name + ' sedang makan!');
    }
}
;
const myRabbit = new Rabbit('Labi', 2, true);
console.log(myRabbit);
myRabbit.eat();
class Eagle extends Animall {
    fly() {
        console.log(this.name + ' sedang terbang!');
    }
}
;
const myEagle = new Eagle('Elo', 4, false);
console.log(myEagle);
myEagle.fly();
