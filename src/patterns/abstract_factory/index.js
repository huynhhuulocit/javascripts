// We have a class or "concrete factory" for each vehicle type
import { Car } from "./Car";

class Truck {
  constructor() {
    this.name = "Truck";
    this.wheels = 8;
  }
  turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!");
}

class Motorcycle {
  constructor() {
    this.name = "Motorcycle";
    this.wheels = 2;
  }
  turnOn = () =>
    console.log("Motorcycle", "sssssssssssssssssssssssssssssshhhhhhhhhhham!!");
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
  createVehicle: function (type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "motorcycle":
        return new Motorcycle();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("car"); // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck"); // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle"); // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }
truck.turnOn();
console.log(truck.name);
console.log(car.name);
console.log(motorcycle.name);
