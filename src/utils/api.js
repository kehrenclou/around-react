class Api {
  constructor({ baseUrl, headers }) {
    //constructor body
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  handleErrorResponse(err) {
    console.log(`Error: ${err}`);
  }

  getInfo() {
    //get user info from server
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then(this._handleResponse);
  }

  getInitialCards() {
    //get cards ? from server
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "GET",
    }).then(this._handleResponse);
  }

  getPromiseCards() {
    return Promise.all(this.getInitialCards());
  }
  getPromiseInfo() {
    return Promise.all(this.getInfo());
  }
  // getAppInfo() {
  //   return Promise.all([this.getInfo(), this.getInitialCards()]);
  // }

  //save profile data
  patchProfileData(inputName, inputAbout) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: inputName,
        about: inputAbout,
      }),
    }).then(this._handleResponse);
  }
  //update profile picture
  patchProfileAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: avatarLink }),
    }).then(this._handleResponse);
  }
  //save new card
  postNewCard(inputName, inputLink) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: inputName,
        link: inputLink,
      }),
    }).then(this._handleResponse);
  }
  //add Like not functional yet
  addLikeOnCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "PUT",
      body: JSON.stringify(),
    }).then(this._handleResponse);
  }

  //delete like
  deleteLikeOnCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify(),
    }).then(this._handleResponse);
  }
  //delete card
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._handleResponse);
  }
}

/* ------------------------- Api class - set up Api ------------------------- */

const baseUrl = "https://around.nomoreparties.co/v1/group-12";
const token = "72dee144-4e03-4ccf-86c7-08640cb55eca";

const api = new Api({
  baseUrl: baseUrl,
  headers: { authorization: token, "Content-Type": "application/json" },
});

/* --------------------------------- exports -------------------------------- */

export { api };
