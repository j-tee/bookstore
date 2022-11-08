/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
// Actions
const LOAD = 'bookstore/categories/LOAD';
const CREATE = 'bookstore/categories/CREATE';
const UPDATE = 'bookstore/categories/UPDATE';
const REMOVE = 'bookstore/categories/REMOVE';
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
export const categoryReducer = (state = { status: '' }, action = { type: null }) => {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return { status: 'Under construction' };

    default: return state;
  }
};

// Action Creators
export const loadcategories = () => ({ type: LOAD });

export const createcategory = (category) => ({ type: CREATE, payload: category });

export const updatecategory = (category) => ({ type: UPDATE, payload: category });

export const removecategory = (category) => ({ type: REMOVE, payload: category });

export const checkcategory = () => ({ type: CHECK_STATUS });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getcategory = () => (dispatch) => get('/category').then((category) => dispatch(updatecategory(category)));
