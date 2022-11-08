/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import { useSelector } from 'react-redux';
import BookList from './BookList';

const Home = () => {
  const { booklist } = useSelector((state) => state.booklist);
  // const dispatch = useDispatch();
  return (
    <>
      <BookList books={booklist} />
    </>
  );
};
export default Home;
