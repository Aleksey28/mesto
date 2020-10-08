export default class Api {
  constructor({ url, idGroup, token }) {
    this._url = url;
    this._idGroup = idGroup;
    this._token = token;
  }

  getUserData() {
    fetch(`${this._url}/v1/${this._idGroup}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
