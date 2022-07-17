import "../blocks/modal.css";




function ImagePopup() {
    return (
        <div className="modal modal_type_image" id="modal-image-popup">
        <div className="modal__content modal__content_type_image">
          <button
            aria-label="Close Image Button"
            type="button"
            className="button modal__button-close"
            id="modal-image-close-button"
          ></button>
          <img src="#" alt="#" className="modal__image" />
          <p className="modal__caption"></p>
        </div>
      </div> 

    );
}

export default ImagePopup;