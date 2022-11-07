/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books';
import categoryReducer from './categories';

export default configureStore({
  reducer: {
    booklist: bookReducer,
    categories: categoryReducer,
  },
});
