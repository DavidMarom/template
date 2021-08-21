import { authorService } from '../../services/authorService';

export function countAuthors() {
  return async dispatch => {
    const number = await authorService.count();
    dispatch({ type: 'COUNT_AUTHORS', number })
  };
}

export function updateAuthor(author) {
  return async dispatch => {
    const _author = await authorService.update(author);
    dispatch({ type: 'UPDATE_AUTHOR', _author })
  };
}

export function loadAuthors() {
  return async dispatch => {
    try {
      const authors = await authorService.getAuthors();
      dispatch({ type: 'SET_AUTHORS', authors });
    } catch (err) {
      console.log('AuthorsActions: err in loadAuthors', err);

    } 
  };
}
