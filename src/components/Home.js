/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';
import BookList from './BookList';

const Home = () => {
  const booklist = [
    {
      id: 1,
      title: 'Lord of the rings',
      author: 'TeeJay',
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'Peter Rawlings',
    },
  ];
  const [books, setBooks] = useState(booklist);
  return (
    <>
      <BookList books={books} />
    </>
  );
};
export default Home;
