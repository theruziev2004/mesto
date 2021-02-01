let popUp = document.querySelector('.popup');
let editForm = document.querySelector('.edit-form');
let formCloseButton = editForm.querySelector('.edit-form__close-button');
let inputName = document.querySelector('#profile-name');
let inputCaption = document.querySelector('#profile-caption');

let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileCaption = profile.querySelector('.profile__caption');

function openPopUp(evt) {
    popUp.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputCaption.value = profileCaption.textContent;
}

function closePopUp(evt) {
    popUp.classList.remove('popup_opened');
}


function saveForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileCaption.textContent = inputCaption.value;
    closePopUp(evt);
}


profileEditButton.addEventListener('click', openPopUp);
formCloseButton.addEventListener('click', closePopUp);
editForm.addEventListener('submit', saveForm);