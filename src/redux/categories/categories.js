/* eslint-disable no-undef */
// Actions
const LOAD = 'bookstore/categories/LOAD';
const CREATE = 'bookstore/categories/CREATE';
const UPDATE = 'bookstore/categories/UPDATE';
const REMOVE = 'bookstore/categories/REMOVE';
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
export default categoryReducer = (state = { categories: [], status: 'Completed' }, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: return {
      categories: [...state.categories, action.payload],
    };
    case CHECK_STATUS: return { ...state, status: 'Under construction' };
    default: return state;
  }
};

// Action Creators
export const loadcategories = () => ({ type: LOAD });

export const createcategory = (category) => ({ type: CREATE, category });

export const updatecategory = (category) => ({ type: UPDATE, category });

export const removecategory = (category) => ({ type: REMOVE, category });

export const checkcategory = (category) => ({ type: CHECK_STATUS, category });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getcategory = () => (dispatch) => get('/category').then((category) => dispatch(updatecategory(category)));
