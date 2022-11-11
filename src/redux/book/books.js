import {
  CREATE, LOAD, REMOVE, UPDATE,
} from '../types';
import BookService from '../../services/bookService';
// Actions

const initialState = { booklist: [] };
// Reducer
export const bookReducer = (state = initialState, action = { type: null, payload: null }) => {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return { booklist: [...action.payload] };
    case CREATE:
      return {
        booklist: [...state.booklist, {
          id: action.payload.item_id,
          author: action.payload.author,
          title: action.payload.title,
          category: action.payload.category,
        }],
      };
    case REMOVE: return {
      booklist: [...state.booklist].filter((book) => book.id !== action.payload.id),
    };
    default: return state;
  }
};

// Action Creators
export const loadbooks = (appkey) => async (dispatch) => {
  const objvalues = [];
  const allbooks = [];
  try {
    const res = BookService.getAll(appkey);
    res.then((d) => {
      Object.values(d.data).map((values) => objvalues.push({ ...values[0] }));
      Object.keys(d.data).map((keys, id) => allbooks.push({
        id: keys,
        title: objvalues[id].title,
        author: objvalues[id].author,
        category: objvalues[id].category,
      }));
      dispatch({ type: LOAD, payload: allbooks });
    });
    return Promise.resolve(res.data);
  } catch (err) { return err; }
};

export const createbook = (book, apikey) => async (dispatch) => {
  try {
    const res = await BookService.create(book, apikey);
    dispatch({ type: CREATE, payload: book });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatebook = (book) => ({ type: UPDATE, payload: book });

export const removebook = (book, apikey) => async (dispatch) => {
  try {
    const res = await BookService.remove(book.id, apikey);
    dispatch({ type: REMOVE, payload: book });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
