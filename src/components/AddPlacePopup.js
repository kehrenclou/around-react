/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------- function AddPlacePopup ------------------------- */
function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    link: "",
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.validity.valid);
    setErrorMessage({ name: event.target.validationMessage });
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
    setIsLinkValid(event.target.validity.valid);
    setErrorMessage({ link: event.target.validationMessage });
  };

  function handleSubmit() {
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
      submitText={isLoading ? "Saving" : "Save"}
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
        onChange={handleNameChange}
        required
      />
      <span
        className={`modal__error ${isNameValid ? "" : "modal__error_visible"}`}
        id="input-place-title-error"
      >
        {errorMessage.name}
      </span>
      <input
        name="input-place-link"
        placeholder="Image link"
        className="modal__input"
        id="input-place-link"
        type="url"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span
        className={`modal__error ${isLinkValid ? "" : "modal__error_visible"}`}
        id="input-place-link-error"
      >
        {errorMessage.link}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
