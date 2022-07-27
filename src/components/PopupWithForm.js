function PopupWithForm(props) {

  return (
    <div
      className={`modal ${props.isOpen ? "modal_open" : ""}`}
      id={`modal-${props.name}`}
    >
      <div className="modal__content">
        <button
          onClick={props.onClose}
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id={`${props.name}-close-button`}
        ></button>
        <h2 className="modal__title">{props.title}</h2>
        <form
          className={`modal__form modal__form_type_${props.name}`}
          id={`modal-form-${props.name}`}
          name={`form-${props.name}`}
        >
          {props.children}
          <button
            aria-label="Submit Form Button"
            type="submit"
            id={`${props.name}-submit-button`}
            className="button modal__button-submit"
          >
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
