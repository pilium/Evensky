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

	sandwich();
	popularCategoriesSlider();
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
