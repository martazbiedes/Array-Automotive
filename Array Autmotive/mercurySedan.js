const VehicleModule = require("./vehicle")

let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(){
        super()
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassender(num){
        if (this.passenger + num > this.maximumPassengers){
            console.log("Not enough Space!");
            availableRoom == false;
        }
        else{
            console.log("Lets Go!")
        }

    }
    start(){
        if (this.fuel > 0){
            start == true;
        }
    }
    scheduleService(milage){
        if (milage > 30000){
            maintanance == true;
        }
    }
}