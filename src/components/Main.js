import flash from "../images/flash.png";
import Button from "./Button";
import PopupWithForm from "./PopupWithForm";
import App from "./App";
import "../blocks/profile.css";
import "../blocks/button.css";
import "../blocks/modal.css";

function Main(props) {
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
            src={flash}
            alt="Profile Picture"
            id="profile-avatar-image"
          />
        </div>

        <div className="profile__details">
          <h1 className="profile__name" id="profile-name">
            Jacques Cousteau
          </h1>

          <Button
            onClick={props.onEditProfileClick}
            aria-label="Edit Profile Button"
            type="button"
            className="button profile__button-edit"
            id="edit-profile-open-button"
          ></Button>

          <p className="profile__about" id="profile-about"></p>
        </div>
        <Button
          onClick={props.onAddPlaceClick}
          aria-label="Add Place Button"
          type="button"
          className="button profile__button-add"
          id="add-place-open-button"
        ></Button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
