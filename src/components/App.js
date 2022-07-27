/* --------------------------------- imports -------------------------------- */
import React, { useEffect } from "react";
import { api } from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import EditProfilePopup from "./EditProfilePopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* ---------------------------- function App(){} ---------------------------- */

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({
    name: " ",
    about: " ",
  });
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");

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

  function handleUpdateUser(currentUser) {

    api
      .setUserInfo(currentUser.name, currentUser.about)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    api
      // .getInfo()
      .getInfo()
      .then((userData) => {
        setCurrentUser(userData);
        // setUserName(userData.name);
        // setUserDescription(userData.about);
        // setUserAvatar(userData.avatar);
        // setCards(initialCards);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, []);

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
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

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
