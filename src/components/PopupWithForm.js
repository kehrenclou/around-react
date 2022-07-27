/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------- function PopupWIthForm ------------------------- */
function PopupWithForm({isOpen,onClose,onSubmit,name,title,children,submitText,...props}) {

  return (
    <div
      className={`modal ${isOpen ? "modal_open" : ""}`}
      id={`modal-${name}`}
    >
      <div className="modal__content">
        <button
          onClick={onClose}
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id={`${name}-close-button`}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form
          className={`modal__form modal__form_type_${name}`}
          id={`modal-form-${name}`}
          name={`form-${name}`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            aria-label="Submit Form Button"
            type="submit"
            id={`${name}-submit-button`}
            className="button modal__button-submit"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
