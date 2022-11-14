/* eslint-disable react/jsx-curly-brace-presence */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Button from './Buttons';
import { removebook } from '../redux/book/books';

const Book = (props) => {
  const { apikey } = useSelector((state) => state.apikey);
  const { book, percentage } = props;
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
        <div className="percent-complete">
          <CircularProgressbar value={percentage} />
          <div className="percentage-value">
            <span className="p-value">
              {`${percentage}%`}
            </span>
            <span>
              completed
            </span>
          </div>
        </div>
        <div className="chapter">
          <span className="chapter-title">
            CURRENT CHAPTER
          </span>
          <span className="chapter-info">
            {'Chapter 3: "A Lesson Learnt"'}
          </span>
          <Button name="UPDATE PROGRESS" className="btn-book" />
        </div>
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
  percentage: PropTypes.number.isRequired,
};

export default Book;
