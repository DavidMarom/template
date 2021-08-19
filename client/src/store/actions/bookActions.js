import { bookService as bookService } from '../../services/bookService';
import { loading, doneLoading } from './systemActions';

export function countBooks() {
  return async dispatch => {
    const number = await bookService.count();
    dispatch({ type: 'COUNT_BOOKS', number })
  };
}

export function updateBook(user) {
  return async dispatch => {
    const _user = await bookService.update(user);
    dispatch({ type: 'UPDATE_USER', _user })
  };
}

export function loadBooks(filter, currPage) {
  return async dispatch => {
    try {
      dispatch(loading());
      const books = await bookService.getBooks(filter, currPage);
      dispatch({ type: 'SET_BOOKS', books });
    } catch (err) {
      console.log('BookActions: err in loadBook', err);

    } finally {
      dispatch(doneLoading());
    }
  };
}

export function removeBook(bookId) {
  return async dispatch => {
    try {
      await bookService.remove(bookId);
      dispatch({ type: 'REMOVE_BOOK', bookId });
    } catch (err) {
      console.log('BookActions: err in removeUser', err);
    }
  };
}

export function getBookById(userId) {
  return async dispatch => {
    try {
      await bookService.getById(userId);
      dispatch({ type: 'GET_USER', userId });
    } catch (err) {
      console.log('UserActions: err in getUser', err);
    }
  };
}