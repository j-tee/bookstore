/* eslint-disable no-undef */
// Actions
const LOAD = 'bookstore/widgets/LOAD';
const CREATE = 'bookstore/widgets/CREATE';
const UPDATE = 'bookstore/widgets/UPDATE';
const REMOVE = 'bookstore/widgets/REMOVE';

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
export const loadWidgets = () => ({ type: LOAD });

export const createWidget = (widget) => ({ type: CREATE, widget });

export const updateWidget = (widget) => ({ type: UPDATE, widget });

export const removeWidget = (widget) => ({ type: REMOVE, widget });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getWidget = () => (dispatch) => get('/widget').then((widget) => dispatch(updateWidget(widget)));
