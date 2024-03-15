window.addEventListener('DOMContentLoaded', () =>{

const menuBtn = document.querySelector('.menuBtns');
const htmlElement = document.querySelector('html');
const navLinks = document.querySelectorAll('nav a');
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        htmlElement.classList.remove('open');
    });
});

const reviewsSliderWrap = document.querySelector('.reviewsSlider');
if(reviewsSliderWrap){
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
}
const accordionItemsFaq = document.querySelectorAll('.faq__container-accord-item');
if(accordionItemsFaq){
  accordionItemsFaq.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
}

function getFileName() {
  const fileInput = document.querySelector('.fileInput'); 
  const files = fileInput.files;
  const fileNames = [];
  
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i].name;
    fileNames.push(fileName);
  }

  const fileNameElement = document.querySelector('.file-name');
  if (fileNameElement) {
    fileNameElement.innerHTML = 'Foto: ' + fileNames.join(', '); 
  }
}

const fileInput = document.querySelector('.fileInput');
    fileInput.addEventListener('change', getFileName);


    document.querySelectorAll('a[href^="#"').forEach(link => {

      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          let href = this.getAttribute('href').substring(1);
  
          const scrollTarget = document.getElementById(href);
  
          const topOffset = document.querySelector('header').offsetHeight;
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;
  
          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
  });
});