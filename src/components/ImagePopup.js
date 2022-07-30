import React, { useRef } from "react";

function ImagePopup({ card, onClose }) {
  const imageRef = useRef();
  function handleOutsideClick(e) {
    if (card && imageRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_image ${card ? "modal_open" : ""}`}
      id="modal-image-popup"
      onClick={handleOutsideClick}
      ref={imageRef}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          aria-label="Close Image Button"
          type="button"
          className="button modal__button-close"
          id="modal-image-close-button"
        />
        <img src={card?.link} alt={card?.name} className="modal__image" />
        <p className="modal__caption">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
