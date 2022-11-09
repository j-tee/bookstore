import { useDispatch, useSelector } from 'react-redux';
import { checkcategory } from '../redux/category/categories';
import Button from './Buttons';

const Category = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.status);
  const checkStatus = () => {
    dispatch(checkcategory());
  };
  return (
    <>
      <h1>{status}</h1>
      <Button handleClickEvent={() => checkStatus()} type="button" name="Check status" />
    </>
  );
};

export default Category;
