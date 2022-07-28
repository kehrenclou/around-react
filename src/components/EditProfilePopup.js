/* --------------------------------- imports -------------------------------- */
import React, { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* ------------------------ function EditProfilePopup ----------------------- */

function EditProfilePopup({
  isOpen,
  onClose,
  onSubmit,
  onUpdateUser,
  isLoading,
  ...props
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-profile"
      title="Edit profile"
      submitText={`${isLoading ? "Saving" : "Save"}`}
    >
      <input
        name="input-name"
        placeholder="Name"
        className="modal__input"
        id="input-profile-name"
        type="text"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={onNameChange}
        required
      />
      <span className="modal__error" id="input-profile-name-error"></span>
      <input
        name="input-about"
        placeholder="About me"
        className="modal__input"
        id="input-profile-about"
        type="text"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={onDescriptionChange}
        required
      />
      <span className="modal__error" id="input-profile-about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
