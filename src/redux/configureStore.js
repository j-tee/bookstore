import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './book/books';
import { categoryReducer } from './category/categories';
import { setupReducer } from './setup/setup';

export default configureStore({
  reducer: {
    booklist: bookReducer,
    status: categoryReducer,
    apikey: setupReducer,
  },
});
