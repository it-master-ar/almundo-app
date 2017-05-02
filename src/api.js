import axios from 'axios'

const api = axios.create({
  baseURL: 'https://books-demo-api.herokuapp.com'
})

const booksApi = {}

booksApi.get = function () {
  return api.get('/book')
}

export default booksApi
