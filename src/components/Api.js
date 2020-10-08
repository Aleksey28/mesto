import { data } from "autoprefixer";

export default class Api {
  constructor({ url, idGroup, token }) {
    this._url = url;
    this._idGroup = idGroup;
    this._token = token;
  }

  async getUserData() {
    const response = await fetch(`${this._url}/v1/${this._idGroup}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token,
      },
    });
    const data = await response.json();

    console.log(data);
  }

  async setUserData({ name, about }) {
    const response = await fetch(`${this._url}/v1/${this._idGroup}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, about }),
    });
    const data = await response.json();

    console.log(data);
  }

  async getCardList() {
    const response = await fetch(`${this._url}/v1/${this._idGroup}/cards`, {
      method: "GET",
      headers: {
        authorization: this._token,
      },
    });
    const data = await response.json();

    console.log(data);
  }
}
