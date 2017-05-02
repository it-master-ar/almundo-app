import axios from 'axios'

const api = axios.create({
  baseURL: 'https://books-demo-api.herokuapp.com'
})

const booksApi = {}

booksApi.get = function () {
  return api.get('/book')
}

booksApi.post = function (book) {
  return api.post('/book', book)
}

export default booksApi
