import {createSelector} from 'reselect'

const books = (state = {}, action = {}) => {
  return state;
}  

export default books;

// Selectors

export const booksSelector = state => state.books

export const allBooksSelector = createSelector(booksSelector, booksHash => Object.values(booksHash))