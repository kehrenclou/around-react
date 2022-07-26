/* --------------------------------- imports -------------------------------- */
import { api } from "../utils/api";
import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* -------------------------- function Main(props) -------------------------- */
function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  ...props
}) {
  const { name, about, avatar, ...currentUser } =
    React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

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

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          id="profile-avatar-container"
          onClick={onEditAvatarClick}
        >
          <img
            className="profile__avatar-image"
            src={avatar}
            alt="Profile"
            id="profile-avatar-image"
          />
        </div>

        <div className="profile__details">
          <h1 className="profile__name" id="profile-name">
            {name}
          </h1>

          <button
            onClick={onEditProfileClick}
            aria-label="Edit Profile Button"
            type="button"
            className="button profile__button-edit"
            id="edit-profile-open-button"
          ></button>

          <p className="profile__about" id="profile-about">
            {about}
          </p>
        </div>
        <button
          onClick={onAddPlaceClick}
          aria-label="Add Place Button"
          type="button"
          className="button profile__button-add"
          id="add-place-open-button"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              onCardClick={onCardClick}
              onLikeClick={handleCardLike}
              card={card}
              key={card._id}
              link={card.link}
              title={card.name}
              alt={card.name}
              ownerId={card.owner._id}
              imageId={card._id}
              likes={card.likes}
              likeCount={card.likes.length}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
