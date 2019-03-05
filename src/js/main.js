/* eslint-disable no-undef */
/* eslint-disable func-names */
$(document).ready(() => {
	svg4everybody();

	// @include('detect.js')

	let sandwich = function () {
		$(document).on('click', '.js-catalog-nav__header', function cb() {
			const sandwichElem = $(this).find('.sandwich');
			const catalog = $(this).parent();

			sandwichElem.toggleClass('sandwich--active');
			catalog.toggleClass('catalog-nav--active');
		});
	};

	let popularCategoriesSlider = function () {
		if ($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			});
		}
	};

	let productSeenSlider = function () {
		const sliderCount = $('.js-section-header__text');
		const slider = $('.js-slider--you-seen');

		// eslint-disable-next-line func-names
		slider.on('init afterChange', (event, slick, currentSlide) => {
			let i = (currentSlide ? currentSlide : 0) + 1;

			sliderCount.text(`Товар ${i} из ${slick.slideCount}`);
		});

		slider.slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider__nav--prev',
			nextArrow: '.slider__nav--next',
		});
	};

	let catalogNav = () => {
		// eslint-disable-next-line func-names
		$('.js-catalog-list__item').hover(function () {
			let catalogBody = $(this).closest('.js-catalog-nav__body');

			catalogBody.css('width', 925);
		// eslint-disable-next-line func-names
		}, function () {
			let catalogBody = $(this).closest('.js-catalog-nav__body');

			catalogBody.css('width', 'auto');
		}
		);
	};

	let locationSelect = () => {
		// eslint-disable-next-line func-names
		$(document).on('click', '.btn--js-location', function () {
			const val = $(this).data('location');

			$(this).closest('.js-location-question').hide();
			if (!val) {
				$(this).closest('.js-location__body').addClass('is-location-selected');
			}
		});

		// eslint-disable-next-line func-names
		$(document).on('click', '.js-location__header', function () {
			$(this).siblings('.js-location__body').toggleClass('is-location-selected');
		});
	};

	let citySelect = () => {
		// eslint-disable-next-line func-names
		$(document).on('click', '.location-select__item', function () {
			let cityVal = $(this).data('city');

			$(this).closest('.js-location__body').removeClass('is-location-selected');
			$('.js-location__current').text(cityVal);
		});
	};

	let modalLink = () => {
		$('.js-modal-link').magnificPopup({
			showCloseBtn: false,
		});

		$(document).on('click', '.close--modal', () => {
			$.magnificPopup.close();
		});
	};

	let inputFile = () => {
		const input = document.querySelector('.js-file-upload__input');
		const result = document.querySelector('.js-file-upload__file');

		input.addEventListener('change', () => {
			let files = input.files;

			for (let i = 0; i < files.length; i++) {
				let sizeNum = files[i].size;

				sizeNum = (sizeNum / 1000000).toFixed(2);
				result.innerHTML += `${files[i].name.toUpperCase()}(${sizeNum}МБ)\n`;
			}
		}

		);
	};

	let validateForm = () => {
		$('form').each(function () {
			$(this).on('submit', function () {
				$(this).validate({
					rules: {
						s: 'required',
						phone: 'required',
						textarea: 'required',
					},
					messages: {
						s: 'Введите поисковый запрос',
						phone: 'Введите корректный номер',
						textarea: 'Заполните поле',
					},
					errorPlacement(error, element) {
						element.attr('placeholder', error[0].outerText);
					},
				});

				if ($(this).valid()) {
					let wrap = $(this)[0].closest('.hide-on-success');

					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}

				return false;
			});
		});
	};

	let fastReview = () => {
		$(document).on('click', '.js-fast-review__number', function () {
			let left = $(this).parent().position().left;

			$(this).parent().siblings().removeClass('fast-review__item--active');
			$(this).parent().addClass('fast-review__item--active');
			$('.js-fast-review__line').css('width', left);
		});
	};

	let tooltipMap = (pos) => {
		$(document).on('click', `.footer-column-contacts__${pos}`, () => {
			$(`.tooltip--map-${pos}`).addClass('tooltip-map--active');
		});
		$(document).on('click', '.close--map', () => {
			$(`.tooltip--map-${pos}`).removeClass('tooltip-map--active');
		});
	};

	sandwich();
	catalogNav();
	popularCategoriesSlider();
	productSeenSlider();
	locationSelect();
	citySelect();
	modalLink();
	inputFile();
	validateForm();
	fastReview();
	tooltipMap('office');
	tooltipMap('stock');
});

let popularCategoriesSlider = () => {
	const sliderElem = $('.js-categories-prev');

	if ($(window).width() < 768 && !sliderElem.hasClass('slick-initializing')) {
		sliderElem.slick('unslick');
	}
};

$(window).on('resize', () => {
	popularCategoriesSlider();
});

// map
if ($('div').is('.tooltip-map__map')) {
	ymaps.ready(() => {
		// eslint-disable-next-line one-var
		let mapOffice = new ymaps.Map('tooltip-map-office', {
				center: [55.751574, 37.573856],
				zoom: 13,
			}, {
				searchControlProvider: 'yandex#search',
			}),

			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(mapOffice.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка',
			}, {
				iconLayout: 'default#image',
				iconImageHref: '../images/tooltip-map/images/map.png',
				iconImageSize: [20, 32],
				iconImageOffset: [-5, -38],
				iconContentLayout: MyIconContentLayout,
			});

		mapOffice.geoObjects
			.add(myPlacemark);
		mapOffice.controls.remove('trafficControl')
			.remove('searchControl')
			.remove('typeSelector')
			.remove('geolocationControl')
			.remove('fullscreenControl')
			.remove('rulerControl');

		// Stock
		// eslint-disable-next-line one-var
		let mapStock = new ymaps.Map('tooltip-map-stock', {
				center: [55.751574, 37.573856],
				zoom: 13,
			}, {
				searchControlProvider: 'yandex#search',
			}),
			MyIconContentLayout2 = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark2 = new ymaps.Placemark(mapStock.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка',
			}, {
				iconLayout: 'default#image',
				iconImageHref: '../images/tooltip-map/images/map.png',
				iconImageSize: [20, 32],
				iconImageOffset: [-5, -38],
				iconContentLayout: MyIconContentLayout2,
			});

		mapStock.geoObjects
			.add(myPlacemark2);
		mapStock.controls.remove('trafficControl')
			.remove('searchControl')
			.remove('typeSelector')
			.remove('geolocationControl')
			.remove('fullscreenControl')
			.remove('rulerControl');
	});
}
