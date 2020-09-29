export default class UserInfo {
  constructor({selectorName, selectorProfession}) {
    this._elementName = document.querySelector(selectorName);
    this._elementProfession = document.querySelector(selectorProfession);
  }

  getUserInfo() {
    return {
      name: this._elementName.textContent,
      profession: this._elementProfession.textContent,
    };
  }

  setUserInfo({name, profession}) {
    this._elementName.textContent = name;
    this._elementProfession.textContent = profession;
  }
}
