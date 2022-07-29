/* --------------------------------- imports -------------------------------- */
import React, { useEffect } from "react";
import { api } from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";

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

  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopoupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [cardToDelete, setCardToDelete] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({
    name: " ",
    about: " ",
    avatar: " ",
  });

  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsConfirmDeletePopoupOpen(false);
    setSelectedCard(null);
  }

  const handleEscClose = React.useCallback((event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  },[] );

  // const handleOutsideClickClose = React.useCallback((event) => {
  //   const isOutside=event.target;
  //   console.log(isOutside, "click");
  //   // if (isOutside === "Escape") {
  //   //   closeAllPopups();
  //   //   //how to grab the modal to compare it or is there another way?
  //   //   //look at using on click? not sure where to put it
  //   // }
  // }, []);
  /* --------------------------- handlers with apis --------------------------- */

  function handleUpdateUser(currentUser) {
    setIsLoading(true);
    api
      .setUserInfo(currentUser.name, currentUser.about)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true);
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
        setIsLoading(false);
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
    setIsConfirmDeletePopoupOpen(true);
    setCardToDelete(card);
  }

  function handleConfirmDelete(event) {
    event.preventDefault();
    setIsLoading(true);
    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        setCards(
          cards.filter(function (item) {
            return item._id !== cardToDelete._id;
          })
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard.name, newCard.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        setIsLoading(false);
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

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose, false);
    return () => {
      document.removeEventListener("keydown", handleEscClose, false);
    };
  }, [handleEscClose]);

  // React.useEffect(() => {
  //   document.addEventListener("click", handleOutsideClickClose, false);
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClickClose, false);
  //   };
  // }, [handleOutsideClickClose]);
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

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />

          <ConfirmDeletePopup
            isOpen={isConfirmDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleConfirmDelete}
            isLoading={isLoading}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            isLoading={isLoading}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
