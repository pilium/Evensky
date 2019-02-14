$(document).ready(() => {
	svg4everybody();

	// @include('detect.js')
	// eslint-disable-next-line func-names
	let sandwich = function () {
		$(document).on('click', '.js-catalog-nav__header', function cb() {
			const sandwichElem = $(this).find('.sandwich');
			const catalog = $(this).parent();

			sandwichElem.toggleClass('sandwich--active');
			catalog.toggleClass('catalog-nav--active');
		});
	};

	// eslint-disable-next-line func-names
	let popularCategoriesSlider = function () {
		if ($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			});
		}
	};

	// eslint-disable-next-line func-names
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

	// eslint-disable-next-line func-names
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

	// eslint-disable-next-line func-names
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

	// eslint-disable-next-line func-names
	let citySelect = () => {
		// eslint-disable-next-line func-names
		$(document).on('click', '.location-select__item', function () {
			let cityVal = $(this).data('city');

			$(this).closest('.js-location__body').removeClass('is-location-selected');
			$('.js-location__current').text(cityVal);
		});
	};

	// eslint-disable-next-line func-names
	let modalLink = () => {
		$('.js-modal-link').magnificPopup({
			showCloseBtn: false,
		});

		$(document).on('click', '.close--modal', () => {
			$.magnificPopup.close();
		});
	};

	// eslint-disable-next-line func-names
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

	sandwich();
	catalogNav();
	popularCategoriesSlider();
	productSeenSlider();
	locationSelect();
	citySelect();
	modalLink();
	inputFile();
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
