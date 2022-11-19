import BookService from '../../services/bookService';

const GET_API_KEY = 'bookstore/categories/GET_API_KEY';

const appkey = 'QCKhl0FzLBumZ0Cf4eoG';
// Reducer
export const setupReducer = (state = { apikey: appkey }, action = { type: null, payload: '' }) => {
  switch (action.type) {
    // do reducer stuff
    case GET_API_KEY:
      return { apikey: action.payload };

    default: return state;
  }
};

// Action Creator
export const getapikey = (apiKey) => async (dispatch) => {
  let res;
  if (!apiKey) {
    res = BookService.getApiKey();
  }
  try {
    res.then((r) => {
      localStorage.setItem('apikey', r.data);
      dispatch({ type: !apiKey ? GET_API_KEY : null, payload: !apiKey ? r.data : apiKey });
    });
    return Promise.resolve(res.data);
  } catch (err) { return err; }
};

// side effects, only as applicable
// e.g. thunks, epics, etc
