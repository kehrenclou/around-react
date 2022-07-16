import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
     <body className="page">
    <header className="header">
      <img
        className="header__logo"
        src="<%=require('./images/HeaderLogo.svg')%>"
        alt="Graphic Around the World in the US"
      />
    </header>
    <main>
      <section className="profile">
        <div className="profile__avatar" id="profile-avatar-container">
          <img
            className="profile__avatar-image"
            src="<%=require('./images/Flash.png')%>"
            alt="Profile Picture"
            id="profile-avatar-image"
          />
        </div>

        <div className="profile__details">
          <h1 className="profile__name" id="profile-name"></h1>
          <h1 className="profile__name" id="profile-name">Jacques Cousteau</h1>

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
    <footer className="footer">
      <p className="footer__text">© 2021 Around The U.S.</p>
    </footer>
    <div className="modal" id="modal-change-avatar">
      <div className="modal__content">
        <button
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id="change-avatar-close-button"
        ></button>
        <h2 className="modal__title">Change profile picture</h2>
        <form
          className="modal__form"
          id="modal-form-change-avatar"
          name="form-change-avatar"
          novalidate
        >
          <input
            name="input-avatar-link"
            placeholder="Avatar link"
            className="modal__input"
            id="input-avatar-link"
            type="url"
            required
          />
          <span className="modal__error" id="input-avatar-link-error"></span>
          <button
            aria-label="Submit New Avatar Form Button"
            type="submit"
            id="new-avatar-submit-button"
            className="button modal__button-submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    <div className="modal" id="modal-edit-profile">
      <div className="modal__content">
        <button
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id="edit-profile-close-button"
        ></button>
        <h2 className="modal__title">Edit profile</h2>
        <form
          className="modal__form"
          id="modal-form-edit-profile"
          name="form-edit-profile"
          novalidate
        >
          <input
            name="input-name"
            placeholder="Name"
            className="modal__input"
            id="input-profile-name"
            type="text"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="modal__error" id="input-profile-name-error"></span>
          <input
            name="input-about"
            placeholder="About me"
            className="modal__input"
            id="input-profile-about"
            type="text"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="modal__error" id="input-profile-about-error"></span>
          <button
            aria-label="Submit Form Button"
            type="submit"
            id="edit-profile-submit-button"
            className="button modal__button-submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    
    <div className="modal modal_type_image" id="modal-image-popup">
      <div className="modal__content modal__content_type_image">
        <button
          aria-label="Close Image Button"
          type="button"
          className="button modal__button-close"
          id="modal-image-close-button"
        ></button>
        <img src="#" alt="#" className="modal__image" />
        <p className="modal__caption"></p>
      </div>
    </div>
    <div className="modal" id="modal-check-delete">
      <div className="modal__content">
        <button
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id="check-delete-close-button"
        ></button>
        <h2 className="modal__title">Are you sure?</h2>
        <form
          className="modal__form modal__form_type_inputless"
          id="modal-form-check-delete"
          name="form-check-delete"
          novalidate
        >
          <button
            aria-label="Confirm Card Delete Button"
            type="submit"
            id="check-delete-submit-button"
            className="button modal__button-submit"
          >
            Yes
          </button>
        </form>
      </div>
    </div>
    <div className="modal" id="modal-add-place">
      <div className="modal__content">
        <button
          aria-label="Close Form Button"
          type="button"
          className="button modal__button-close"
          id="add-place-close-button"
        ></button>
        <h2 className="modal__title">New Place</h2>
        <form
          className="modal__form"
          id="modal-form-add-place"
          name="form-add-place"
          novalidate
        >
          <input
            name="input-place-title"
            placeholder="Title"
            className="modal__input"
            id="input-place-title"
            type="text"
            minlength="1"
            maxlength="30"
            required
          />
          <span className="modal__error" id="input-place-title-error"></span>
          <input
            name="input-place-link"
            placeholder="Image link"
            className="modal__input"
            id="input-place-link"
            type="url"
            required
          />
          <span className="modal__error" id="input-place-link-error"></span>
          <button
            aria-label="Submit New Places Form Button"
            type="submit"
            id="add-place-submit-button"
            className="button modal__button-submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    <template id="card-template" className="card-template"
      >
      <li className="cards__item">
        <button
          aria-label="Delete button"
          type="button"
          className="button cards__button_type_delete"
          id="place-delete-button"
        ></button>
        <img src=" " alt=" " className="cards__image" id="card-image" />
        <div className="cards__textbox">
          <h2 className="cards__text" id="card-text"></h2>
          <div className="cards__like-container">
            <button
              aria-label="Like Button"
              type="button"
              className="button cards__button_type_like"
              id="place-like-button"
            ></button>
            <p className="cards__like-count">#</p>
          </div>
        </div>
      </li>
    </template>
    <script type="module" src="./pages/index.js"></script>
  </body> 

   
  );
}

export default App;
