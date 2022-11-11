import PropTypes from 'prop-types';

const AddInput = (props) => {
  const {
    type, id, name, placeholder, className,
  } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};
AddInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
AddInput.defaultProps = {
  type: '',
  id: '',
  name: '',
  placeholder: '',
  className: '',
};
export default AddInput;
