/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    id, className, handleClickEvent, name, type,
  } = props;
  return (
    <button
      id={id}
      className={className}
      onClick={handleClickEvent}
      name={name}
      type={type}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleClickEvent: PropTypes.func.isRequired,
};
Button.defaultProps = {
  type: 'button',
  id: '',
  name: '',
  className: '',
};

export default Button;
