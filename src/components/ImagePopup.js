import "../blocks/modal.css";
import React from "react";

function ImagePopup({ card, onClose }) {
  return card ? (
    <div
      className="modal modal_type_image modal_open"
      id="modal-image-popup"
      card={card}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          aria-label="Close Image Button"
          type="button"
          className="button modal__button-close"
          id="modal-image-close-button"
        ></button>
        <img src={card.link} alt={card.title} className="modal__image" />
        <p className="modal__caption">{card.title}</p>
      </div>
    </div>
  ) : null;
}

export default ImagePopup;
