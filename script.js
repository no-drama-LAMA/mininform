// burger
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
const headerCloseMenu = document.querySelector('.header__close');

headerBurger.addEventListener('click', function () { 
    headerMenu.classList.add('header__menu_active');
});
headerCloseMenu.addEventListener('click', function () { 
    headerMenu.classList.remove('header__menu_active');
});

$('.events__months').slick({
    infinite: true,
    slidesToShow: 12,
    swipeToSlide: true,
    // slidesToScroll: 1,
    prevArrow: `<button type="button" data-role="none" class="events__button-prev" aria-label="Next" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M25.0566 5.52939C25.1982 5.38627 25.309 5.21791 25.3825 5.03392C25.456 4.84994 25.4908 4.65393 25.485 4.45709C25.4791 4.26025 25.4327 4.06644 25.3485 3.88672C25.2642 3.70699 25.1437 3.54488 24.9938 3.40963C24.8439 3.27439 24.6676 3.16865 24.4749 3.09847C24.2822 3.02829 24.077 2.99503 23.8708 3.0006C23.6647 3.00617 23.4617 3.05045 23.2735 3.13092C23.0853 3.21139 22.9155 3.32648 22.7739 3.4696L9.42914 16.9617C9.15355 17.24 9 17.6085 9 17.9916C9 18.3746 9.15355 18.7431 9.42914 19.0215L22.7739 32.5151C22.9146 32.6613 23.0843 32.7794 23.2732 32.8625C23.4621 32.9456 23.6664 32.992 23.8743 32.9991C24.0821 33.0061 24.2894 32.9737 24.484 32.9036C24.6786 32.8335 24.8567 32.7272 25.0079 32.5908C25.1591 32.4545 25.2805 32.2908 25.3649 32.1093C25.4493 31.9278 25.4951 31.7321 25.4996 31.5335C25.5042 31.335 25.4673 31.1375 25.3913 30.9527C25.3152 30.7678 25.2015 30.5993 25.0566 30.4568L12.7292 17.9916L25.0566 5.52939Z" fill="#818283"/></svg></button>`,
    nextArrow: `<button type="button" data-role="none" class="events__button-next" aria-label="Next" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M10.9434 30.4706C10.8018 30.6137 10.691 30.7821 10.6175 30.9661C10.544 31.1501 10.5092 31.3461 10.515 31.5429C10.5209 31.7397 10.5673 31.9336 10.6515 32.1133C10.7358 32.293 10.8563 32.4551 11.0062 32.5904C11.1561 32.7256 11.3324 32.8313 11.5251 32.9015C11.7178 32.9717 11.923 33.005 12.1292 32.9994C12.3353 32.9938 12.5383 32.9495 12.7265 32.8691C12.9147 32.7886 13.0845 32.6735 13.2261 32.5304L26.5709 19.0383C26.8464 18.76 27 18.3915 27 18.0084C27 17.6254 26.8464 17.2569 26.5709 16.9785L13.2261 3.48495C13.0854 3.33869 12.9157 3.22059 12.7268 3.1375C12.5379 3.05441 12.3336 3.00799 12.1257 3.00094C11.9179 2.99389 11.7106 3.02635 11.516 3.09642C11.3214 3.1665 11.1433 3.2728 10.9921 3.40915C10.8409 3.5455 10.7195 3.70919 10.6351 3.8907C10.5507 4.07221 10.5049 4.26792 10.5004 4.46647C10.4958 4.66503 10.5327 4.86246 10.6087 5.04731C10.6848 5.23215 10.7986 5.40073 10.9434 5.54324L23.2708 18.0084L10.9434 30.4706Z" fill="#818283"/></svg></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 9,
          }
        },
        {
            breakpoint: 769,
            settings: {
              slidesToShow: 7,
            }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 4,
            }
        },
      ]
});

// календарь
const month = document.querySelectorAll(".events__month");

month.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("events__month_active");
    });
});

// вверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


$(document).ready(function() {
  // Select
  $(function() {
    $('.catalogue__input').select2({
      multiple: true,
    });
  });

});