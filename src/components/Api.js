export default class Api {
  constructor ({address,token}) {
    this._address = address;
    this._token = token;

  }
  getUserInfo () {
    return fetch (`${this._address}/users/me `, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }

  getCards () {
    return fetch (`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
  addCard (data) {
    return fetch (`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
  deleteCard(data) {
    return fetch (`${this._address}/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }

  changeAvatar (avatar) {
    return fetch (`${this._address}/users/me/${"avatar"} `, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
  newProfileInfo (item) {
    return fetch (`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.profileName,
        about: item.profileDescription
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
  putLike (data) {
    return fetch (`${this._address}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
  deleteLike (data) {
    return fetch (`${this._address}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject (`Ошибка ${res.status}`)
    })
  }
}




