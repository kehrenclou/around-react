/* --------------------------------- imports -------------------------------- */
import React from "react";
import logo from "../logo.svg";
import "../index.css";
import HeaderLogo from "../images/HeaderLogo.svg";
import flash from "../images/flash.png";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../blocks/modal.css";

/* ---------------------------- function App(){} ---------------------------- */

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard]=React.useState();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(){
    setSelectedCard();
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
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

      <ImagePopup></ImagePopup>

 <Card></Card>
      <script type="module" src="./pages/index.js"></script>
    </div>
  );
}

export default App;
