"use strict";

class Person {
  constructor(vardas, pavarde, elPastas, amzius) {
    this.name = vardas;
    this.lastName = pavarde;
    this.email = elPastas;
    this.age = amzius;
  }
  getPersonInfo() {
    console.log(
      `Vardas: ${this.name}\nPavarde: ${this.lastName}\nEl.Pastas: ${this.email}\nAmzius: ${this.age}`
    );
  }
}

const ugnius = new Person("Ugnius", "Uscilas", "ugniusu@gmail.com", 27);

ugnius.getPersonInfo();

//////////////////////////////////////////

// class Animal {
//   static greet() {
//     console.log("Warrap ni**a !");
//   }
//   hello() {
//     console.log("Imma weird af !");
//   }
// }

// const kentauras = new Animal();
// console.log(kentauras);
// Animal.greet();
// kentauras.hello();

/////////////////////////////////////////

class Student extends Person {
  constructor(vardas, pavarde, elPastas, amzius, kursas, vidurkis) {
    super(vardas, pavarde, elPastas, amzius);
    this.course = kursas;
    this.avg = vidurkis;
  }
  getStudentInfo() {
    console.log(
      `Vardas: ${this.name}\nPavarde: ${this.lastName}\nEl.Pastas: ${this.email}\nAmzius: ${this.age}\nKursas: ${this.course}\nVidurkis: ${this.avg}`
    );
  }
}

const petras = new Student(
  "Petras",
  "Dovydaitis",
  "grietininis@gmail.com",
  38,
  "Givianimas",
  4
);
petras.getStudentInfo();

////////////////////////////////////////////////////
class Teacher extends Person {
  constructor(vardas, pavarde, elPastas, amzius, dalykas, alga) {
    super(vardas, pavarde, elPastas);
    this.subject = dalykas;
    this.age = amzius;
    this.salary = alga;
    this.topics = [];
  }
  isHappy() {
    if (this.salary > 800) {
      console.log("Not bad");
    } else if (this.salary > 1200) {
      console.log("Hooray");
    } else {
      console.log("Quit the job !");
    }
  }
  setTopic(topic) {
    this.topics.push(topic);
  }
  getTopic() {
    this.topics.forEach((el) =>
      console.log(`Mokytoja ${this.name} desto ${el}`)
    );
  }
}

const giedre = new Teacher(
  "Giedre",
  "Kurvelyte",
  "kurvelyte@gmail.com",
  24,
  "matematika",
  750
);

giedre.isHappy();

giedre.setTopic("diskriminantas");
giedre.setTopic("parabole");
console.log(giedre);
giedre.getTopic();
