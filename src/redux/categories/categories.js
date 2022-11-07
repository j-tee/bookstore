/* eslint-disable no-undef */
// Actions
const LOAD = 'bookstore/widgets/LOAD';
const CREATE = 'bookstore/widgets/CREATE';
const UPDATE = 'bookstore/widgets/UPDATE';
const REMOVE = 'bookstore/widgets/REMOVE';
const CHECK_STATUS = 'bookstore/widgets/CHECK_STATUS';

// Reducer
export default categoryReducer = (state = { categories: [], status: 'Completed' }, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: return {
      categories: [...state.categories, action.payload],
    };
    case CHECK_STATUS: return {
      status: 'Under construction',
    };
    default: return state;
  }
};

// Action Creators
export const loadWidgets = () => ({ type: LOAD });

export const createWidget = (widget) => ({ type: CREATE, widget });

export const updateWidget = (widget) => ({ type: UPDATE, widget });

export const removeWidget = (widget) => ({ type: REMOVE, widget });

export const checkWidget = (widget) => ({ type: CHECK_STATUS, widget });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getWidget = () => (dispatch) => get('/widget').then((widget) => dispatch(updateWidget(widget)));
