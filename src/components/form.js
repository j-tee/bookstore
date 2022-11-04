import AddInput from './AddInput';

const BookForm = () => (
  <>
    <AddInput name="title" type="text" className="form-field" />
    <AddInput name="author" type="text" className="form-field" />
  </>
);

export default BookForm;
