import { data } from 'autoprefixer';

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getProxy(relativePath, method, body = '') {
    const options = {
      method,
      headers: this._headers,
    };

    if (!!body) {
      options.body = body;
    }

    return fetch(`${this._baseUrl}${relativePath}`, options);
  }

  async _handleResponse(response) {
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async getUserData() {
    const response = await this._getProxy('/users/me', 'GET');
    return await this._handleResponse(response);
  }

  async setUserData({ name, about }) {
    const response = await this._getProxy('/users/me', 'PATCH', JSON.stringify({ name, about }));
    return await this._handleResponse(response);
  }

  async setAvatar({ link }) {
    const response = await this._getProxy('/users/me/avatar', 'PATCH', JSON.stringify({ avatar: link }));
    return await this._handleResponse(response);
  }

  async getCardList() {
    const response = await this._getProxy('/cards', 'GET');
    return await this._handleResponse(response);
  }

  async addCard({ name, link }) {
    const response = await this._getProxy('/cards', 'POST', JSON.stringify({ name, link }));
    return await this._handleResponse(response);
  }

  async deleteCard(id) {
    const response = await this._getProxy(`/cards/${id}`, 'DELETE');
    return await this._handleResponse(response);
  }

  addCardLike(id) {
    this._editCardLike(id, 'PUT');
  }

  deleteCardLike(id) {
    this._editCardLike(id, 'DELETE');
  }

  async _editCardLike(id, action) {
    const response = await this._getProxy(`/cards/likes/${id}`, action);
    return await this._handleResponse(response);
  }
}
