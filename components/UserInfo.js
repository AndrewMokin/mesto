export default class UserInfo {
  constructor({nameProfileSelector,informProfileSelector}) {
  this._nameProfile = document.querySelector(nameProfileSelector);
  this._informationProfile = document.querySelector(informProfileSelector);
  }

  getUserInfo () {
    return {
      profileName: this._nameProfile.textContent,
      profileDescription: this._informationProfile.textContent
    }
  }

  setUserInfo (name,inform) {
    this._nameProfile.textContent = name;
    this._informationProfile.textContent = inform;
  }
}
