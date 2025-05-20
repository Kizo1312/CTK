"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMake() {
        return this.make;
    }
    SetModel(newModel) {
        this.model = newModel;
    }
    getInfo() {
        return `${this.make}, ${this.model} (${this.year}) `;
    }
    startEngine() {
        console.log("Engine started");
    }
    static getNumberOfWheels() {
        return 4;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getInfo());
myCar.startEngine();
console.log(Car.getNumberOfWheels());
class ElectricCar extends Car {
    batteryCapacity;
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    charge() {
        console.log(`Charging battery to ${this.batteryCapacity} kWh`);
    }
    getInfo() {
        const prva = super.getInfo();
        return `${prva} Battery: ${this.batteryCapacity}`;
    }
    logaj() {
        return super.getMake();
    }
}
const mySecondCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
console.log(mySecondCar.getInfo());
mySecondCar.charge();
myCar.getMake();
console.log(mySecondCar.logaj());
myCar.SetModel("Corsa");
console.log(myCar.getInfo());
const popis = [myCar, mySecondCar];
popis.forEach((car) => {
    console.log(car.getInfo());
});
console.log(myCar.getMake());
console.log(mySecondCar.getMake());
//# sourceMappingURL=script.js.map