class Book {
  constructor (title, author) {
    this.title = title
    this.author = author
  }
}

const book1 = new Book('YDKJS', 'Kyle Simpson')
const book2 = new Book('JS The Good Parts', 'Douglas Crockford')
const books = [book1, book2]

const booksList = document.getElementById('booksList')
const bookForm = document.getElementById('bookForm')

books.forEach((b) => {
  booksList.innerHTML += '<li>' + b.title + '</li>'
})

bookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = bookForm.title.value
  const author = bookForm.author.value

  books.push(new Book(title, author))
  booksList.innerHTML += '<li>' + title + '</li>'

  bookForm.title.value = ''
  bookForm.author.value = ''
})
