$(document).ready(() => {
	svg4everybody();

	// @include('detect.js')

	// ------------------------------------------------//
	// SANDWICh
	// ------------------------------------------------//
	// eslint-disable-next-line func-names
	let sandwich = function () {
		$('.sandwich').on('click', function cb() {
			$(this).toggleClass('sandwich--active');
		});
	};
	// ------------------------------------------------//
	// SANDWICh END
	// ------------------------------------------------//
	// ------------------------------------------------//
	// Popular-cat-slider
	// ------------------------------------------------//
	// eslint-disable-next-line func-names
	let popularCategoriesSlider = function () {
		if ($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			});
		}
	};
	// ------------------------------------------------//
	// Popular-cat-slider END
	// ------------------------------------------------//
	// ------------------------------------------------//
	// You-seen product slider
	// ------------------------------------------------//
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
	// ------------------------------------------------//
	// You-seen product slider END
	// ------------------------------------------------//

	sandwich();
	popularCategoriesSlider();
	productSeenSlider();
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
