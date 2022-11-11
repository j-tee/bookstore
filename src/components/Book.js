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
    <div>
      {book.title}
      {book.author}
      <Button id={book.id} handleClickEvent={() => removeBook(book)} name="Remove" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
