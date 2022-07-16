import flash from "../images/flash.png";

function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" id="profile-avatar-container">
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

          <button
            aria-label="Edit Profile Button"
            type="button"
            className="button profile__button-edit"
            id="edit-profile-open-button"
          ></button>
          <p className="profile__about" id="profile-about"></p>
        </div>
        <button
          aria-label="Add Place Button"
          type="button"
          className="button profile__button-add"
          id="add-place-open-button"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
