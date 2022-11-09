/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Buttons';
import { removebook } from '../redux/book/books';

const Book = (props) => {
  const { id, title, author } = props.book;
  const dispatch = useDispatch();
  const removeBook = (book) => {
    dispatch(removebook(book));
  };
  useEffect(() => () => {
  }, [dispatch]);
  return (
    <div>
      {title}
      {author}
      <Button id={id} handleClickEvent={() => removeBook(props.book)} name="Remove" />
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
