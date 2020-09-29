export default class UserInfo {
  constructor({selectorName, selectorProfession}) {
    this._selectorName = selectorName;
    this._selectorProfession = selectorProfession;
  }

  getUserInfo() {
    return {
      name: document.querySelector(selectorName).textContent,
      profession: document.querySelector(selectorProfession).textContent,
    };
  }
}
