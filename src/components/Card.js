export default class Card {
  constructor (api,selector,data, handleCardClick, handleTrashClick, userId) {
    this._data = data
    this._selector = selector;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes
    this._likesId = data.likes._id
    this._idImage = data._id;
    this._idSelector = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._api = api;
    this._userId = userId;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.place')
    .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.place__like')
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__image').alt = this._name;
    this._element.querySelector('.place__title').textContent = this._name;
    this._element.querySelector('.place__likes').textContent = this._likes.length;
    this._getLike();
    this._hideTrash();
    this._setEventListeners();
    return this._element;
  }

  _handleClickLike = () => {
    this._activeLike = this._likeButton.classList.toggle('place__like_active');
    if (this._activeLike === true) {
      this._api.putLike(this._data).then((res) => {
          this._likeButton.classList.add('place__like_active');
          this._element.querySelector('.place__likes').textContent = res.likes.length;
      }).catch(err => console.log(err))
    } else {
      this._api.deleteLike(this._data).then((res) => {
          this._element.querySelector('.place__likes').textContent = res.likes.length;
          this._likeButton.classList.remove('place__like_active');
        }).catch(err => console.log(err))
    }
  }
  _getLike() {
    const findId = this._likes.some((element) => {
        return element._id ===this._userId
      })
       if (findId === true) {
        this._element.querySelector('.place__like').classList.add('place__like_active');
       }
      }

  _hideTrash() {
      if (this._idSelector ===this._userId) {
        this._element.querySelector('.place__delete').classList.remove('place__delete_novisible')
      }
    }

  _setEventListeners() {
    this._element.querySelector('.place__delete').addEventListener('click', () => {
    this._handleTrashClick (this._data,this._element)
    });
    this._likeButton.addEventListener('click', this._handleClickLike)
    this._element.querySelector('.place__image').addEventListener('click',
    () =>{
    this._handleCardClick(this._link, this._name);}
    );
  }

}



