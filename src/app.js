import booksApi from './api'
import Book from './book'

const booksList = document.getElementById('booksList')
const bookForm = document.getElementById('bookForm')

booksApi.get()
  .then(res => {
    res.data.forEach((b) => {
      booksList.innerHTML += '<li>' + b.title + '</li>'
    })
  })

bookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = bookForm.title.value
  const author = bookForm.author.value

  booksApi.post(new Book(title, author))
    .then(() => {
      booksList.innerHTML += '<li>' + title + ' - ' + author + '</li>'

      bookForm.title.value = ''
      bookForm.author.value = ''
    })
})
