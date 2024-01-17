"use strict";

class Reader {
  constructor(name, lastName, cardNumber, book) {
    this.name = name;
    this.lastName = lastName;
    this.cardNumber = cardNumber;
    this.book = book;
    this.person = [];
  }
}

//////////////////////////////////////////

class book extends Reader {
  constructor(name, lastName, cardNumber, book) {
    super(name, lastName, cardNumber, book);
    this.books = [];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const bookName = document.getElementById("bookName").value;

    const bookOwner = new book(name, lastname, cardNumber, bookName);
    addBookToTable(bookOwner);

    form.reset();
  });

  function addBookToTable(reader) {
    const table = document.getElementById("bookTable");

    const newRow = table.insertRow();

    const name = newRow.insertCell(0);
    const lastname = newRow.insertCell(1);
    const cardNumber = newRow.insertCell(2);
    const book = newRow.insertCell(3);

    name.textContent = reader.name;
    lastname.textContent = reader.lastName;
    cardNumber.textContent = reader.cardNumber;
    book.textContent = reader.book;
  }

  const select = document.createElement("select");
  const option = document.createElement("option");
  select.append(option);

  option.textContent = bookName;
});

// const john = new book("John", "Jonas", 1);
// console.log(john);
// john.bookTaken("All Quiet in the Western Front");
