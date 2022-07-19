/* --------------------------------- imports -------------------------------- */
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

/* ---------------------------- function App(){} ---------------------------- */

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        ></Main>
        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
            required
          />
          <span className="modal__error" id="input-avatar-link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="edit-profile"
          title="Edit profile"
          submitText="Save"
        >
          <input
            name="input-name"
            placeholder="Name"
            className="modal__input"
            id="input-profile-name"
            type="text"
            minLength="2"
            maxLength="40"
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
            required
          />
          <span className="modal__error" id="input-profile-about-error"></span>
        </PopupWithForm>

        <PopupWithForm
          onClose={closeAllPopups}
          name="check-delete"
          title="Are you sure?"
          submitText="Yes"
        ></PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add-place"
          title="New Place"
          submitText="Save"
        >
          <input
            name="input-place-title"
            placeholder="Title"
            className="modal__input"
            id="input-place-title"
            type="text"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="modal__error" id="input-place-title-error"></span>
          <input
            name="input-place-link"
            placeholder="Image link"
            className="modal__input"
            id="input-place-link"
            type="url"
            required
          />
          <span className="modal__error" id="input-place-link-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </div>
  );
}

export default App;
