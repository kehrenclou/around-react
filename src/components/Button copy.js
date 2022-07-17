import React from "react";
import PropTypes from "prop-types";
import "../blocks/button.css";

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onclick: PropTypes.func.isRequired,
};

function Button({ children, onClick }) {
  return (
    <button
      aria-label="Edit Profile Button"
      type="button"
      className="button profile__button-edit"
      id="edit-profile-open-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}




export default Button;
