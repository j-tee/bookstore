import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Buttons';
import { removebook } from '../redux/book/books';

const Book = (props) => {
  const { apikey } = useSelector((state) => state.apikey);
  const { book } = props;
  const dispatch = useDispatch();
  const removeBook = (book) => {
    dispatch(removebook(book, apikey));
  };
  return (
    <div className="display-panel">
      <div>
        <div className="cat-name">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="auth-name">{book.author}</div>
        <ul className="book-tags">
          <li><Button className="book-tags-button" id={book.id} name="Comments" /></li>
          <li><Button className="book-tags-button" id={book.id} handleClickEvent={() => removeBook(book)} name="Remove" /></li>
          <li><Button className="book-tags-button" id={book.id} name="Edit" /></li>
        </ul>
      </div>
      <div className="progress">
        <div className="circular-progress-container">
          <div className=".circular-progress" />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
