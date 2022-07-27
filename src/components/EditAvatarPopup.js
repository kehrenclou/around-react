/* --------------------------------- imports -------------------------------- */
import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------ function EditAvatarPopup ------------------------ */
function EditAvatarPopup({
  isOpen,
  onClose,
  onSubmit,
  onUpdateAvatar,
  ...props
}) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="change-avatar"
      title="Change profile picture"
      submitText="Save"
    >
      <input
        name="input-avatar-link"
        placeholder="Avatar link"
        className="modal__input"
        id="input-avatar-link"
        type="url"
        ref={avatarRef}
        required
      />
      <span className="modal__error" id="input-avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
