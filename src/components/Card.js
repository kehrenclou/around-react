/* --------------------------------- imports -------------------------------- */
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* ------------------------------ function Card ----------------------------- */
export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((user) => user._id === currentUser._id);

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
        onClick={handleClick}
        src={props.link}
        alt={props.name}
        className="cards__image"
        id="card-image"
      />
      <div className="cards__textbox">
        <h2 className="cards__text" id="card-text">
          {props.title}
        </h2>
        <div className="cards__like-container">
          <button
            aria-label="Like Button"
            type="button"
            className={cardLikeButtonClassName}
            // className="button cards__button_type_like"
            id="place-like-button"
          ></button>
          <p className="cards__like-count">{props.likeCount}</p>
        </div>
      </div>
    </li>
  );
}
