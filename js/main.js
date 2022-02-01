const burgerToggler = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");
const form = document.querySelector(".form__content");
const buttonClose = document.querySelector(".form__button")
const radios = document.querySelector(".form__radios")

burgerToggler.addEventListener("click", function () {
    burgerToggler.classList.toggle ("header__burger--opened")
    navigation.classList.toggle ("header__nav--opened")
})

form.addEventListener("click", function () {
    buttonClose.classList.toggle ("form__button--close")
    radios.classList.toggle ("form__radios--open")
})