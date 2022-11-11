import { PropTypes } from 'prop-types';
import AddInput from './AddInput';
import Button from './Buttons';

const BookForm = (props) => {
  const { addBook } = props;
  return (
    <div className="book-form">
      <p className="form-title">ADD NEW BOOK</p>
      <form>
        <AddInput
          placeholder="Title"
          name="title"
          type="text"
          className="form-input"
        />
        <AddInput
          placeholder="Author"
          name="author"
          type="text"
          className="form-input"
        />
        <Button id="add-book" handleClickEvent={addBook} name="ADD BOOK" className="btn-add" />
      </form>
    </div>
  );
};
BookForm.propTypes = {
  addBook: PropTypes.func,
};

BookForm.defaultProps = {
  addBook: null,
};
export default BookForm;
