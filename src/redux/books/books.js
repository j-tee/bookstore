/* eslint-disable no-undef */
// Actions
const LOAD = 'bookstore/books/LOAD';
const CREATE = 'bookstore/books/CREATE';
const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer
export default bookReducer = (state = { booklist: [] }, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: return {
      booklist: [...state.booklist, action.payload],
    };
    case REMOVE: return {
      booklist: state.booklist.filter((book) => book.id !== action.payload.id),
    };
    default: return state;
  }
};

// Action Creators
export const loadbooks = () => ({ type: LOAD });

export const createbook = (book) => ({ type: CREATE, book });

export const updatebook = (book) => ({ type: UPDATE, book });

export const removebook = (book) => ({ type: REMOVE, book });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getbook = () => (dispatch) => get('/book').then((book) => dispatch(updatebook(book)));
