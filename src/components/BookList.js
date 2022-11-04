/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import Book from './Book';
import Buttons from './Buttons';
import BookForm from './form';

const BookList = (props) => (
  <div>
    <h3>List of Books</h3>
    {props.books.map((book) => (
      <Book
        key={book.id}
        book={book}
      />
    ))}
    <BookForm />
    <Buttons name="Add Book" className="btn-remove" />
  </div>
);

export default BookList;
