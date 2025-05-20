class Car {
    private make:string;
    private model:string;
    private  year:number;
    constructor(make:string, model:string, year:number){
        this.make= make;
        this.model=model;
        this.year=year
    }
    public getMake(){
        return this.make
    }
    public SetModel(newModel:string){
        this.model = newModel
    }
    public getInfo():string{
        return `${this.make}, ${this.model} (${this.year}) `

    }
    public startEngine():void{
        console.log("Engine started")

    }
    public static getNumberOfWheels(): number{
        return 4
    }
}

const myCar = new Car("Toyota", "Corolla", 2020)

console.log(myCar.getInfo())
myCar.startEngine()
console.log(Car.getNumberOfWheels())

class ElectricCar extends Car {
    private batteryCapacity:number ;
    constructor(make:string, model:string, year:number,batteryCapacity:number){
        super(make,model,year)
        this.batteryCapacity = batteryCapacity
    }
    public charge():void{
        console.log(`Charging battery to ${this.batteryCapacity} kWh`)
    }
    public getInfo(): string {
        const prva = super.getInfo()

        return `${prva} Battery: ${this.batteryCapacity}`
    }
    public logaj (){
       return super.getMake()
    }
        
    }
const mySecondCar = new ElectricCar("Tesla", "Model 3", 2021, 75)
console.log(mySecondCar.getInfo())
mySecondCar.charge()
myCar.getMake()
console.log(mySecondCar.logaj())
myCar.SetModel("Corsa")
console.log(myCar.getInfo())

const popis: Car[] = [myCar,mySecondCar]
popis.forEach((car) =>{
    console.log(car.getInfo())


})

console.log(myCar.getMake())
console.log(mySecondCar.getMake())
