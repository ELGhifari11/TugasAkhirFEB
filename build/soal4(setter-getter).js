"use strict";
class Circle {
    constructor() {
        this._radius = 10;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value / this._radius;
    }
}
const circle = new Circle();
console.log(circle);
