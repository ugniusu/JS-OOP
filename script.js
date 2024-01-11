class Person {
  constructor(vardas, pavarde, amzius, elPastas) {
    this.name = vardas;
    this.lastName = pavarde;
    this.age = amzius;
    this.email = elPastas;
  }
  getPersonInfo() {
    console.log(
      `Vardas: ${this.name}\npavarde: ${this.lastName}\nazmius: ${this.age}\nEl.Pastas: ${this.email}`
    );
  }
}

const jonas = new Person("Jonas", "Jonaitis", 24, "jonas.jonaitis@example.com");
const petras = new Person(
  "Petras",
  "Dovydaitis",
  38,
  "petras.petraitis@example.com"
);
const algis = new Person(
  "Algis",
  "Algiauskas",
  46,
  "algis.algiauskas@example.com"
);
jonas.getPersonInfo();
petras.getPersonInfo();
algis.getPersonInfo();

////////////////////////////////////////////////////////////////////
// STATIC

// class Animal {
//   static greeting() {
//     console.log("I am weird animal!");
//   }
//   hello() {
//     console.log("Imma weird af !");
//   }
// }
// const minotauras = new Animal();
// console.log(minotauras);
// Animal.greeting();
// minotauras.hello();

//////////////////////////////////////////////////////////////////
class Student extends Person {
  constructor(vardas, pavarde, amzius, elPastas, kursas, vidurkis) {
    super(vardas, pavarde, amzius, elPastas);
    this.course = kursas;
    this.avg = vidurkis;
  }
  printStudentInfo() {
    super.getPersonInfo();
    console.log(`\nKursas: ${this.course}\nPazymiu vidurkis: ${this.avg}`);
  }
}

const jonas2 = new Student(
  "Jonas",
  "Jonaitis",
  24,
  "jonas.jonaitis@example.com",
  "JavaScript",
  7.9
);
jonas2.printStudentInfo();

//////////////////////////////////////////////////////////////////
class Teacher extends Person {
  constructor(vardas, pavarde, amzius, elPastas, alga, dalykas) {
    super(vardas, pavarde, amzius, elPastas);
    this.subject = dalykas;
    this.salary = alga;
    this.topics = [];
  }

  isHappy() {
    if (this.salary > 1200) {
      console.log("Nu zuper");
    } else if (this.salary > 800) {
      console.log("Not bad");
    } else {
      console.log("Poor bitch");
    }
  }

  setTopic(topikas) {
    this.topics.push(topikas);
  }

  getTopic() {
    this.topics.forEach((el) => {
      console.log(`Mokytoja ${this.name}\nDesto: ${el}`);
    });
  }
}

const mokytoja = new Teacher(
  "Terese",
  "Jarmaliene",
  40,
  "jarmaliene@example.com",
  800,
  "Lietuviu kalba"
);
console.log(mokytoja);

mokytoja.isHappy();
mokytoja.setTopic("Gramatika");
mokytoja.setTopic("Gramatika");
console.log(mokytoja);

const topikai = ["oop", "array", "xxx", ""];
topikai.forEach((topic) => mokytoja.setTopic(topic));
mokytoja.getTopic();
