import React from "react";

/* ------------------------- function Popup ------------------------- */
function Popup({ isOpen, onClose, name, children }) {

    
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`} id={`modal-${name}`} onClick={onClose}>
      <div className="modal__content">{children}</div>
    </div>
  );
}
export default Popup;
