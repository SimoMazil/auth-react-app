import api from '../api';
import { BOOKS_FETCHED, BOOKS_CREATED } from '../types';
import { normalize } from 'normalizr';
import {bookSchema} from '../schemas'

const booksFetched = data => (
  {
    type: BOOKS_FETCHED,
    data
  }
)

const bookCreated = data => (
  {
    type: BOOKS_CREATED,
    data
  }
)

export const fetchBooks = () => dispatch => api.books.fetchAll().then(books => {
  dispatch(booksFetched(normalize(books, [bookSchema])))
});

export const createBook = data => dispatch => api.books.create(data).then(book => {
  dispatch(bookCreated(normalize(book, bookSchema)))
});