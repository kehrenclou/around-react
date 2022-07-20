import { api } from "../utils/api";
import React from "react";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
          onClick={props.onEditAvatarClick}
        >
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt="Profile Picture"
            id="profile-avatar-image"
          />
        </div>

        <div className="profile__details">
          <h1 className="profile__name" id="profile-name">
            {userName}
          </h1>

          <button
            onClick={props.onEditProfileClick}
            aria-label="Edit Profile Button"
            type="button"
            className="button profile__button-edit"
            id="edit-profile-open-button"
          ></button>

          <p className="profile__about" id="profile-about">
            {userDescription}
          </p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
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
              onCardClick={props.onCardClick}
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
