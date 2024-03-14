const burgerBtn = document.querySelector('.menuBtns');
const headerWrapperMobile = document.querySelector('.header__container-bottom-wrapper')
burgerBtn.addEventListener('click', () =>{
    headerWrapperMobile.classList.toggle('open');
});
const reviewsSlider = new Swiper('.reviewsSlider', {
    slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:{
      nextEl: '.reviews__container-top-arrow-next',
      prevEl: '.reviews__container-top-arrow-prev',
      
  },
  // Responsive breakpoints
  breakpoints: {
   
    
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }

  });