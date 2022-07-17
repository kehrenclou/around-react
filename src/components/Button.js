import React from "react";
import PropTypes from "prop-types";




Button.propTypes = {
//   children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Button({onClick, className, id, type, labelText }) {
  return (
    <button
    onClick={onClick}
    className={className}
    id={id}
    type={type}
    aria-label={labelText}
     
    >
      {/* {children} */}
    </button>
  );
}

export default Button;
