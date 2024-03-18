export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal say F*ck");
  }

  getName() {
    console.log("Animal name " + this.name);
  }
}
