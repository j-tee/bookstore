/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Buttons';

const Book = (props) => {
  const { id, title, author } = props.book;
  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);
  return (
    <div>
      {id}
      {title}
      {author}
      <Button name="Remove" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
