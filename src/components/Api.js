import { data } from "autoprefixer";

export default class Api {
  constructor({ url, idGroup, token }) {
    this._url = url;
    this._idGroup = idGroup;
    this._token = token;
  }

  _getProxy(relativePath, method, headers = {}, body = "") {
    const options = {
      method,
      headers,
    };

    options.headers.authorization = this._token;

    if (!!body) {
      options.body = body;
    }

    return fetch(`${this._url}/v1/${this._idGroup}${relativePath}`, options);
  }

  async getUserData() {
    const response = await this._getProxy("/users/me", "GET");
    const data = await response.json();

    console.log(data);
  }

  async setUserData({ name, about }) {
    const response = await this._getProxy(
      "/users/me",
      "PATCH",
      { "Content-Type": "application/json" },
      JSON.stringify({ name, about })
    );
    const data = await response.json();

    console.log(data);
  }

  async setAvatar(link) {
    const response = await this._getProxy(
      "/users/me/avatar",
      "PATCH",
      { "Content-Type": "application/json" },
      JSON.stringify({ avatar: link })
    );
    const data = await response.json();

    console.log(data);
  }

  async getCardList() {
    const response = await this._getProxy("/cards", "GET");
    const data = await response.json();

    console.log(data);
  }

  async addCard({ name, link }) {
    const response = await this._getProxy(
      "/cards",
      "POST",
      { "Content-Type": "application/json" },
      JSON.stringify({ name, link })
    );

    const data = await response.json();

    console.log(data);
  }

  async deleteCard(id) {
    const response = await this._getProxy(`/cards/${id}`, "DELETE");

    const data = await response.json();

    console.log(data);
  }

  addCardLike(id) {
    this._editCardLike(id, "PUT");
  }

  deleteCardLike(id) {
    this._editCardLike(id, "DELETE");
  }

  async _editCardLike(id, action) {
    const response = await this._getProxy(`/cards/likes/${id}`, action);

    const data = await response.json();

    console.log(data);
  }
}
