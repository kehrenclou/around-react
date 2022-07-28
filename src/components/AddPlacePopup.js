/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------- function AddPlacePopup ------------------------- */
function AddPlacePopup({
  isOpen,
  onClose,
  onSubmit,
  onAddPlaceSubmit,
  isLoading,
  ...props
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onLinkChange = (event) => {
    setLink(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
  }


  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add-place"
      title="New Place"
      submitText={`${isLoading ? "Saving" : "Save"}`}
    >
      <input
        name="input-place-title"
        placeholder="Title"
        className="modal__input"
        id="input-place-title"
        type="text"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={onNameChange}
        required
      />
      <span className="modal__error" id="input-place-title-error"></span>
      <input
        name="input-place-link"
        placeholder="Image link"
        className="modal__input"
        id="input-place-link"
        type="url"
        value={link}
        onChange={onLinkChange}
        required
      />
      <span className="modal__error" id="input-place-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
