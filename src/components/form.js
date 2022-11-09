import AddInput from './AddInput';

const BookForm = () => (
  <form>
    <AddInput placeholder="Title" name="title" type="text" className="form-field" />
    <AddInput placeholder="Author" name="author" type="text" className="form-field" />
  </form>
);

export default BookForm;
