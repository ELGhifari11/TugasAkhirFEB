class Circle {
    private _radius : number = 10;

    get radius() {
        return this._radius;
    }

    set radius(value : number) {
        this._radius = value / this._radius;
    }
}

const circle = new Circle();
console.log(circle);
