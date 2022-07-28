/* --------------------------------- imports -------------------------------- */
import React, { useEffect } from "react";
import { api } from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import EditProfilePopup from "./EditProfilePopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* -------------------------------------------------------------------------- */
/*                                 functionApp                                */
/* -------------------------------------------------------------------------- */
function App() {
  /* ------------------------------- use states ------------------------------- */
  const [cards, setCards] = React.useState([]);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({
    name: " ",
    about: " ",
    avatar: " ",
  });

  /* -------------------------------- functions ------------------------------- */

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
  /* --------------------------- handlers with apis --------------------------- */

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

  function handleUpdateAvatar(newAvatar) {
    api
      .setProfileAvatar(newAvatar.avatar)
      .then((newAvatar) => {
        // setUserAvatar(newAvatar);
        setCurrentUser(newAvatar);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(
          cards.filter(function (item) {
            return item._id !== card._id;
          })
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }
  function handleAddPlaceSubmit(newCard) {
    api
      .addNewCard(newCard.name, newCard.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }
  /* --------------------------- useEffect api calls -------------------------- */
  useEffect(() => {
    api
      .getInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, []);

  /* --------------------------------- return --------------------------------- */
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          ></Main>
          <Footer />

          <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} />

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

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
