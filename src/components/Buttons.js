/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
const Button = (props) => (
  <button
    id={props.id}
    className={props.className}
    onClick={props.handleClickEvent}
    name={props.name}
    type={props.type}
  >
    {props.name}
  </button>
);

Button.defaultProps = {
  type: 'button',

  disabled: false,
};

export default Button;
