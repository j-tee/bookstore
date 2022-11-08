/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// Actions

const LOAD = 'bookstore/books/LOAD';
const CREATE = 'bookstore/books/CREATE';
const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';
const books = [
  {
    id: '1',
    title: 'Lord of the rings',
    author: 'TeeJay',
  },
  {
    id: '2',
    title: 'Harry Potter',
    author: 'Peter Rawlings',
  },
  {
    id: '3',
    title: 'Oliver Twist',
    author: 'Charles Dickens',
  },
];

const initialState = { booklist: books };
// Reducer
export const bookReducer = (state = initialState, action = { type: null }) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE:
      return {
        booklist: [...state.booklist, action.payload],
      };
    case REMOVE: return {
      booklist: [...state.booklist].filter((book) => book.id !== action.payload.id),
    };
    default: return state;
  }
};

// Action Creators
export const loadbooks = () => ({ type: LOAD });

export const createbook = (book) => ({ type: CREATE, payload: book });

export const updatebook = (book) => ({ type: UPDATE, payload: book });

export const removebook = (book) => ({ type: REMOVE, payload: book });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getbook = () => (dispatch) => get('/book').then((book) => dispatch(updatebook(book)));
