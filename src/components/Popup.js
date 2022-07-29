import React, { useRef } from "react";

/* ------------------------- function Popup ------------------------- */
function Popup({ isOpen, onClose, name, children }) {
  const popupRef = useRef();

  function handleModalClick(event) {
    if (isOpen && popupRef.current === event.target) {
      onClose();
    }
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_open" : ""}`}
      id={`modal-${name}`}
      ref={popupRef}
      onClick={handleModalClick}
    >
      <div className="modal__content">{children}</div>
    </div>
  );
}
export default Popup;
