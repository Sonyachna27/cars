const burgerBtn = document.querySelector('.menuBtns');
const headerWrapperMobile = document.querySelector('.header__container-bottom-wrapper')
burgerBtn.addEventListener('click', () =>{
    headerWrapperMobile.classList.toggle('open');
})