'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Book = function Book(title, author) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
};

var book1 = new Book('YDKJS', 'Kyle Simpson');
var book2 = new Book('JS The Good Parts', 'Douglas Crockford');
var books = [book1, book2];

var booksList = document.getElementById('booksList');
var bookForm = document.getElementById('bookForm');

books.forEach(function (b) {
  booksList.innerHTML += '<li>' + b.title + '</li>';
});

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var title = bookForm.title.value;
  var author = bookForm.author.value;

  books.push(new Book(title, author));
  booksList.innerHTML += '<li>' + title + '</li>';

  bookForm.title.value = '';
  bookForm.author.value = '';
});