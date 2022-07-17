import flash from "../images/flash.png";
import Button from "./Button";
import "../blocks/profile.css";
import "../blocks/button.css";
import "../blocks/modal.css";

const handleEditAvatarclick = () => {
  console.log("edit profile clicked");
  const openEditButton = document.querySelector("#modal-change-avatar");
  openEditButton.classList.add("modal_open");
};

const handleEditProfileClick = () => {
  console.log("edit profile clicked");
  const openEditButton = document.querySelector("#modal-edit-profile");
  openEditButton.classList.add("modal_open");
};

const handleAddPlaceClick = () => {
  console.log("addplace clicked");
  const openEditButton = document.querySelector("#modal-add-place");
  openEditButton.classList.add("modal_open");
};

function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" id="profile-avatar-container" onClick={handleEditAvatarclick}>
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
            onClick={handleEditProfileClick}
            aria-label="Edit Profile Button"
            type="button"
            className="button profile__button-edit"
            id="edit-profile-open-button"
          ></Button>

          <p className="profile__about" id="profile-about"></p>
        </div>
        <Button
          onClick={handleAddPlaceClick}
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
