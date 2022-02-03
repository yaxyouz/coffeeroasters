const burgerToggler = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");
const buttonOpen = document.querySelectorAll(".js-form-button")

burgerToggler.addEventListener("click", function () {
    burgerToggler.classList.toggle ("header__burger--opened")
    navigation.classList.toggle ("header__nav--opened")
})

if(buttonOpen.length > 0) {
    buttonOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.nextElementSibling.classList.toggle('form__radios--open');
            btn.classList.toggle('form__button--close');
        })
    })
}

