export default class Card {
  constructor (api,selector,data, handleCardClick, handleTrashClick) {
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
  _handleDeletePlace = () => {
    this._element.remove();
    this._element = null;
  }
  _handleClickLike = () => {
    this._activeLike = this._likeButton.classList.toggle('place__like_active');
    if (this._activeLike === true) {
      this._api.putLike(this._data).then((res) => {
          this._likeButton.classList.add('place__like_active');
          this._element.querySelector('.place__likes').textContent = res.likes.length;
      })
    } else {
      this._api.deleteLike(this._data).then((res) => {
          this._element.querySelector('.place__likes').textContent = res.likes.length;
          this._likeButton.classList.remove('place__like_active');
        })
    }
  }
  _getLike() {
    const _id = `91a6cfafb2cc6f78470b5569`;
    const findId = this._likes.some((element) => {
        return element._id ===_id
      })
       if (findId === true) {
        this._element.querySelector('.place__like').classList.add('place__like_active');
       }
      }

  _hideTrash() {
    const _id = `91a6cfafb2cc6f78470b5569`;
      if (this._idSelector ===_id) {
        this._element.querySelector('.place__delete').classList.remove('place__delete_novisible')
      }
    }

  _setEventListeners() {
    const _id = `91a6cfafb2cc6f78470b5569`;
    this._element.querySelector('.place__delete').addEventListener('click', () => {this._handleTrashClick (this._api,this._data,this._element)});
    this._likeButton.addEventListener('click', this._handleClickLike)
    this._element.querySelector('.place__image').addEventListener('click',
    () =>{
    this._handleCardClick(this._link, this._name);}
    );
  }

}



