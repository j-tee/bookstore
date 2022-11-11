import PropTypes from 'prop-types';

const AddInput = (props) => {
  const {
    type, id, name, placeholder,
  } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
AddInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
AddInput.defaultProps = {
  type: '',
  id: '',
  name: '',
  placeholder: '',
};
export default AddInput;
