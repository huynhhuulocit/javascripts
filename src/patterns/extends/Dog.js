import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  getName() {
    console.log("Dog name " + this.name);
  }
}
