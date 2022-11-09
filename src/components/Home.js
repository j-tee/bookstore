import { useSelector } from 'react-redux';
import BookList from './BookList';

const Home = () => {
  const { booklist } = useSelector((state) => state.booklist);
  return (
    <>
      <BookList books={booklist} />
    </>
  );
};
export default Home;
