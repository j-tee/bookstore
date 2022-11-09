/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createbook } from '../redux/book/books';
import Book from './Book';
import Button from './Buttons';
import BookForm from './form';

const BookList = (props) => {
  const dispatch = useDispatch();
  let form;
  let data;
  const addBook = () => {
    form = document.querySelector('form');
    data = Object.fromEntries(new FormData(form).entries());
    const myBook = { ...data, id: uuidv4() };
    dispatch(createbook(myBook));
  };

  return (
    <div>
      <h3>List of Books</h3>
      {props.books.map((book) => (
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
