import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { createbook, loadbooks } from '../redux/book/books';
import Book from './Book';
import Button from './Buttons';
import BookForm from './form';
import { getapikey } from '../redux/setup/setup';

const BookList = () => {
  const dispatch = useDispatch();
  const { apikey } = useSelector((state) => state.apikey);
  const { booklist } = useSelector((state) => state.booklist);
  useEffect(() => {
    dispatch(getapikey(apikey));
    dispatch(loadbooks(apikey));
  }, [apikey, dispatch]);

  const addBook = () => {
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    const book = { item_id: uuidv4(), ...data, category: 'Fiction' };
    form.reset();
    dispatch(createbook(book, apikey));
  };
  return (
    <div>
      <h3>List of Books</h3>
      {booklist.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
      <BookForm />
      <Button id="add-book" handleClickEvent={() => addBook()} name="Add New Book" className="btn-add" />
    </div>
  );
};
export default BookList;
