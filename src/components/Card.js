import "../blocks/cards.css";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="cards__item">
      <button
        aria-label="Delete button"
        type="button"
        className="button cards__button_type_delete"
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
            className="button cards__button_type_like"
            id="place-like-button"
          ></button>
          <p className="cards__like-count">{props.likeCount}</p>
        </div>
      </div>
    </li>
  );
}
