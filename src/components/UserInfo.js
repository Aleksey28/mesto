export default class UserInfo {
  constructor({ selectorName, selectorAbout, selectorAvatar }) {
    this._elementName = document.querySelector(selectorName);
    this._elementAbout = document.querySelector(selectorAbout);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._elementName.textContent,
      about: this._elementAbout.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._elementName.textContent = name;
    this._elementAbout.textContent = about;
    this._avatar.src = avatar;
  }
}
