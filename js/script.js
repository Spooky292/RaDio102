// Форма входа
const button = document.querySelector('button');
const form = document.querySelector('#popup__closed');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

// Play, Pause
document.querySelector('.block-eliment__play__button__earlier').addEventListener('click', function (e) {
  e.target.closest('.block-eliment__play__button__earlier').classList.toggle('block-eliment__play__button__earlier--toggle');
})

document.querySelector('.block-eliment__play__button__now').addEventListener('click', function (e) {
  e.target.closest('.block-eliment__play__button__now').classList.toggle('block-eliment__play__button__now--toggle');
})

document.querySelector('.podcast-enable_common').addEventListener('click', function (e) {
  e.target.closest('.podcast-enable_common').classList.toggle('podcast-enable_common--toggle');
})

document.querySelector('.button-individual1').addEventListener('click', function (e) {
  e.target.closest('.button-individual1').classList.toggle('button-individual1--toggle');
})

document.querySelector('.button-individual2').addEventListener('click', function (e) {
  e.target.closest('.button-individual2').classList.toggle('button-individual2--toggle');
})

document.querySelector('.button-individual3').addEventListener('click', function (e) {
  e.target.closest('.button-individual3').classList.toggle('button-individual3--toggle');
})

document.querySelector('.button-individual4').addEventListener('click', function (e) {
  e.target.closest('.button-individual4').classList.toggle('button-individual4--toggle');
})

document.querySelector('.button-individual5').addEventListener('click', function (e) {
  e.target.closest('.button-individual5').classList.toggle('button-individual5--toggle');
})

document.querySelector('.button-individual6').addEventListener('click', function (e) {
  e.target.closest('.button-individual6').classList.toggle('button-individual6--toggle');
})

document.querySelector('.button-individual7').addEventListener('click', function (e) {
  e.target.closest('.button-individual7').classList.toggle('button-individual7--toggle');
})

document.querySelector('.button-individual8').addEventListener('click', function (e) {
  e.target.closest('.button-individual8').classList.toggle('button-individual8--toggle');
})

document.querySelector('.button-individual9').addEventListener('click', function (e) {
  e.target.closest('.button-individual9').classList.toggle('button-individual9--toggle');
})

document.querySelector('.button-individual10').addEventListener('click', function (e) {
  e.target.closest('.button-individual10').classList.toggle('button-individual10--toggle');
})

document.querySelector('.button-individual11').addEventListener('click', function (e) {
  e.target.closest('.button-individual11').classList.toggle('button-individual11--toggle');
})

// Бургер меню
$(document).ready(function () {
  $('.menu-burger').click(function () {
    $('.menu-burger').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});

// Бургер меню №2
$(document).ready(function () {
  $('.menu-burger-two').click(function () {
    $('.menu-burger-two').toggleClass('open-menu__two');
    $('.header-two__nav-two').toggleClass('open-menu__two');
    $('body').toggleClass('fixed-page');
  });
});

// Closed, Open
document.querySelector('.spoiler__label__open__closed__button').addEventListener('click', function (e) {
  e.target.closest('.spoiler__label__open__closed__button').classList.toggle('spoiler__label__open__closed__button--toggle');
})

document.querySelector('.button-accordion').addEventListener('click', function (e) {
  e.target.closest('.button-accordion').classList.toggle('button-accordion--toggle');
})

// Показать ещё карточки
$(function () {
  var $cards = $('#podcasts-cards').find('.podcasts-item_card'),
    cardsRange = 8;
  $cards.slice(cardsRange).addClass('podcasts-item_card--hidden');

  $('#podcasts__show-cards__button').click(function () {
    $cards.slice(cardsRange).toggleClass('podcasts-item_card--hidden');
  });
});


// Селект
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholderValue: '',
  itemSelectText: '',
});

document.querySelector('.choices__item--selectable').textContent = "Дмитрий Гутенберг";

// Accordion
$(".plus").click(function () {
  if ($(this).css("transform") == 'none') {
    $(this).css("transform", "rotate(45deg)");
  } else {
    $(this).css("transform", "");
  }
});

new Accordion('.accordion');

function look(elemId) {
  var elem = document.getElementById(elemId);
  elem.style.display === "none" ?
    elem.style.display = "block" : elem.style.display = "none";
}

$(document).ready(function () {
  $('.guests-name').click(function () {
    $('.guest-card').not($(this).next('div')).slideUp('slow');
    $(this).next('div').stop(true, true).slideDown('slow');
  });
});

// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.3,
  spaceBetween: 10,
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },
});

const swiper2 = new Swiper ('.swiper-container_about_us', {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },
});

const swiper3 = new Swiper ('.about_us-mobile_swiper_container', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true
  },
});

// Форма обратной связи
(function() {
	var input              = document.getElementById('username');
	var	form               = document.getElementById('form');
	var	elem               = document.createElement('div');
			elem.id            = 'notify';
			elem.style.display = 'none';
			form.appendChild(elem);

	input.addEventListener('invalid', function(event){
		event.preventDefault();
		if ( ! event.target.validity.valid ) {
			input.className    = 'invalid animated shake';
			elem.textContent   = 'Ошибка';
			elem.className     = 'error';
			elem.style.display = 'block';
		}
	});

	input.addEventListener('input', function(event){
		if ( 'block' === elem.style.display ) {
			input.className = '';
			elem.style.display = 'none';
		}
	});
})();
