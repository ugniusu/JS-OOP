"use strict";
import { Animal } from "./model.js";
// export class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   setAge() {
//     this.age++;
//   }
//   getInfo() {
//     console.log(`Vardas: ${name}, amzius ${age}`);
//   }
// }

const tom = new Animal("Tom", 24);
console.log(tom);
tom.setAge();

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age);
    this.color = color;
    this.legs = legs;
  }

  getInfo() {
    console.log(
      `Vardas: ${this.name}\nAmzius: ${this.age}\nSpalvyte: ${this.color}\nKojeles: ${this.legs}`
    );
  }
}

const ted = new Dog("Ted", 6, "Juodis", 4);
ted.setAge();
ted.getInfo();
