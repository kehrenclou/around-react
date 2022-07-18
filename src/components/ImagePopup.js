import "../blocks/modal.css";

function ImagePopup(props) {
  return (
    <div
      className={`modal modal_type_image ${props.card ? "modal_open" : ""}`}
      id="modal-image-popup"
      card={props.card}
    >
      <div className="modal__content modal__content_type_image">
        <button
          aria-label="Close Image Button"
          type="button"
          className="button modal__button-close"
          id="modal-image-close-button"
        ></button>
        <img src={props.link} alt={props.alt} className="modal__image" />
        <p className="modal__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
