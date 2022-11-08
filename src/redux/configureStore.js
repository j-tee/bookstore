/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './book/books';
import { categoryReducer } from './category/categories';

export default configureStore({
  reducer: {
    booklist: bookReducer,
    status: categoryReducer,
  },
});
