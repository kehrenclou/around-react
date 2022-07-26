/* --------------------------------- imports -------------------------------- */
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* ------------------------------ function Card ----------------------------- */
export default function Card({
  onCardClick,
  onLikeClick,
  card,
  link,
  name,
  title,
  likeCount,
  ...props
}) {
  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onLikeClick(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((user) => user._id === currentUser._id);

  const cardDeleteButtonClassName = ` button cards__button_type_delete ${
    isOwn ? "cards__button_type_delete-active" : ""
  }`;

  const cardLikeButtonClassName = ` button cards__button_type_like ${
    isLiked ? "cards__button_type_like-active" : " "
  }`;

  return (
    <li className="cards__item">
      <button
        aria-label="Delete button"
        type="button"
        className={cardDeleteButtonClassName}
        id="place-delete-button"
      ></button>
      <img
        onClick={handleCardClick}
        src={link}
        alt={name}
        className="cards__image"
        id="card-image"
      />
      <div className="cards__textbox">
        <h2 className="cards__text" id="card-text">
          {title}
        </h2>
        <div className="cards__like-container">
          <button
            aria-label="Like Button"
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            id="place-like-button"
          ></button>
          <p className="cards__like-count">{likeCount}</p>
        </div>
      </div>
    </li>
  );
}
