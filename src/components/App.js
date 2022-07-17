/* --------------------------------- imports -------------------------------- */
import logo from "../logo.svg";
import "../index.css";
import HeaderLogo from "../images/HeaderLogo.svg";
import flash from "../images/flash.png";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../blocks/modal.css";

/* ---------------------------- function App(){} ---------------------------- */

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="change-avatar"
        title="Change profile picture"
        submitText="Save"
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
      </PopupWithForm>
      <PopupWithForm name="edit-profile" title="Edit profile" submitText="Save">
        <input
          name="input-name"
          placeholder="Name"
          className="modal__input"
          id="input-profile-name"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal__error" id="input-profile-name-error"></span>
        <input
          name="input-about"
          placeholder="About me"
          className="modal__input"
          id="input-profile-about"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="modal__error" id="input-profile-about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="check-delete"
        title="Are you sure?"
        submitText="Yes"
      ></PopupWithForm>

      <PopupWithForm name="add-place" title="New Place" submitText="Save">
        <input
          name="input-place-title"
          placeholder="Title"
          className="modal__input"
          id="input-place-title"
          type="text"
          minLength="1"
          maxLength="30"
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
      </PopupWithForm>


     <ImagePopup></ImagePopup>

      <template id="card-template" className="card-template">
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
    </div>
  );
}

export default App;
