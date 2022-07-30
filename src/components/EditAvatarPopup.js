/* --------------------------------- imports -------------------------------- */
import React, { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------ function EditAvatarPopup ------------------------ */
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();
  const [isLinkValid, setIsLinkValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleLinkChange(event) {
    setIsLinkValid(event.target.validity.valid);
    setErrorMessage(event.target.validationMessage);
  }

  function handleSubmit() {
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="change-avatar"
      title="Change profile picture"
      submitText={isLoading ? "Saving" : "Save"}
    >
      <input
        name="input-avatar-link"
        placeholder="Avatar link"
        className="modal__input"
        id="input-avatar-link"
        type="url"
        ref={avatarRef}
        onChange={handleLinkChange}
        required
      />
      <span
        className={`modal__error ${isLinkValid ? "" : "modal__error_visible"}`}
        id="input-avatar-link-error"
      >
        {errorMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
