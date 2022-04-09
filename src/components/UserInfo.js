export default class UserInfo {
  constructor({nameProfileSelector,informProfileSelector,avatarProfileSelector}) {
  this._nameProfile = document.querySelector(nameProfileSelector);
  this._informationProfile = document.querySelector(informProfileSelector);
  this._avatarProfileSelector = document.querySelector(avatarProfileSelector);
  }

  getUserInfo () {
    return {
      profileName: this._nameProfile.textContent,
      profileDescription: this._informationProfile.textContent,
      avatarProfileSelector: this._avatarProfileSelector.src
    }
  }

  setUserInfo (name,inform) {
    this._nameProfile.textContent = name;
    this._informationProfile.textContent = inform;
  }
  setUserAvatar (avatar) {
    this._avatarProfileSelector.src = avatar;
  }
}
