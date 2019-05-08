/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable func-names */
$(document).ready(() => {
	svg4everybody();

	$('input[type="tel"]').mask('+7(999) 999-9999');

	// @include('detect.js')

	let sandwich = function () {
		$(document).on('click', '.js-catalog-nav__header', function cb() {
			const sandwichElem = $(this).find('.sandwich');
			const catalog = $(this).parent();

			sandwichElem.toggleClass('sandwich--active');
			$('.sandwich--mobile').removeClass('sandwich--active');
			$('.mobile-nav').removeClass('mobile-nav--active');
			catalog.toggleClass('catalog-nav--active');
		});

		if ($(window).width() < 768) {
			$(document).on('click', '.sandwich--mobile', () => {
				$('.sandwich--mobile').toggleClass('sandwich--active');
				$('body').toggleClass('is-fixed');
				$('.mobile-nav').toggleClass('mobile-nav--active');

				if ($('.catalog-nav').hasClass('catalog-nav--active')) {
					$('.catalog-nav').removeClass('catalog-nav--active');
				}
			});
		}
	};

	let popularCategoriesSlider = function () {
		if ($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				infinite: false,
				arrows: true,
				prevArrow: '.popular-prev__btn--prev',
				nextArrow: '.popular-prev__btn--next',
				dots: true,
			});
		}
	};

	let productSeenSlider = function () {
		const sliderCount = $('.js-section-header__text');
		const slider = $('.js-slider--you-seen');

		slider.on('init afterChange', (event, slick, currentSlide) => {
			if (slick.slideCount > 4) {
				let i = (currentSlide ? currentSlide : 0) + 1;

				sliderCount.text(`${Math.ceil(i / slick.options.slidesToShow)} из ${Math.ceil(slick.slideCount / slick.options.slidesToShow)}`);
			}
		});

		slider.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider__nav--prev',
			nextArrow: '.slider__nav--next',
			autoplay: false,
			edgeFriction: 0.56,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1239,
					settings: {
						slidesToShow: 3,
						arrows: false,
						dots: true,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						dots: false,
					},
				},
			],
		});
	};

	let aboutBlockSlider = function () {
		const slider = $('.js-slider--about-block');

		$(slider).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			adaptiveHeight: true,
			infinite: true,
			autoplay: false,
			arrows: true,
			prevArrow: '.about__block-btn--prev',
			nextArrow: '.about__block-btn--next',
			dots: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						dots: false,
						arrows: false,
					},
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
						dots: true,
						arrows: false,
					},
				},
			],
		});
	};

	let recommendSlider = function () {
		const slider = $('.js-slider--about-recommend');

		$(slider).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			autoplay: false,
			arrows: true,
			prevArrow: '.about__recommend-btn--prev',
			nextArrow: '.about__recommend-btn--next',
			dots: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						arrows: false,
						dots: true,
					},
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
						dots: true,
						arrows: false,
					},
				},
			],
		});
	};

	let catalogNav = () => {
		if (window.innerWidth > 768) {
			$('.js-catalog-list__item').hover(function () {
				let catalogBody = $(this).closest('.js-catalog-nav__body');

				catalogBody.css('width', 925);
			}, function () {
				let catalogBody = $(this).closest('.js-catalog-nav__body');

				catalogBody.css('width', 'auto');
			}
			);
		} else if (window.innerWidth < 768) {
			$(document).on('click', '.catalog-list__label', function () {
				$(this).parent().toggleClass('catalog-list__item--active');
				$(this).siblings().removeClass('catalog-list__item--active');
			});
		}
	};

	let catalogSubnavInner = () => {
		if (window.innerWidth <= 767) {
			$(document).on('click', '.catalog-subnav__header', function () {
				$(this).toggleClass('catalog-subnav__header--active');
			});
		}
	};

	let locationSelect = () => {
		$(document).on('click', '.btn--js-location', function () {
			const val = $(this).data('location');

			$(this).closest('.js-location-question').hide();
			if (!val) {
				$(this).closest('.js-location__body').addClass('is-location-selected');
				$('.overlay').addClass('overlay--is-active');
			}
		});

		$(document).on('click', '.js-location__header', function () {
			$(this).siblings('.js-location__body').toggleClass('is-location-selected');
			$('.overlay').addClass('overlay--is-active');
		});

		$(document).on('click', '.close--location', function () {
			$(this).closest('.js-location__body').removeClass('is-location-selected');
			$('.overlay').removeClass('overlay--is-active');
		});

		$(document).on('click', (e) => {
			let target = e.target.classList;
			let t = Array.from(target);

			if (t.includes('overlay')) {
				$('.js-location__body').removeClass('is-location-selected');
				$('.overlay').removeClass('overlay--is-active');
			}
		});
	};

	let citySelect = () => {
		$(document).on('click', '.location-select__item', function () {
			let cityVal = $(this).data('city');

			$(this).closest('.js-location__body').removeClass('is-location-selected');
			$('.overlay').removeClass('overlay--is-active');
			$('.js-location__current').text(cityVal);
		});
	};

	let modalLink = () => {
		$('.js-modal-link').magnificPopup({
			showCloseBtn: false,
		});

		if (window.innerWidth < 768) {
			$('.js-modal-link').on('mfpOpen', () => {
				$('body').addClass('is-fixed');
			});
			$('.js-modal-link').on('mfpClose', () => {
				$('body').removeClass('is-fixed');
			});
		}

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

	let inputSelect = () => {
		const selects = document.querySelectorAll('.field-select__select');

		if (selects) {
			if (typeof Object.assign !== 'function') {
				Object.assign = function (target) {
					if (target == null) {
						throw new TypeError('Cannot convert undefined or null to object');
					}

					target = Object(target);
					for (let index = 1; index < arguments.length; index++) {
						// eslint-disable-next-line prefer-rest-params
						let source = arguments[index];

						if (source != null) {
							for (let key in source) {
								if (Object.prototype.hasOwnProperty.call(source, key)) {
									target[key] = source[key];
								}
							}
						}
					}

					return target;
				};
			}

			// eslint-disable-next-line no-new
			new Choices('.field-select__select', {
				searchEnabled: false,
				placeholderValue: 'Выберите',
			});
		}
	};

	let validateForm = () => {
		$('form').each(function () {
			$(this).on('submit', function () {
				$(this).validate({
					rules: {
						s: 'required',
						phone: 'required',
						textarea: 'required',
						mail: 'required',
						password: 'required',
						fio: 'required',
					},
					messages: {
						s: 'Введите поисковый запрос',
						phone: 'Введите корректный номер',
						textarea: 'Заполните поле',
						mail: 'Введите электронную почту',
						password: 'Введите пароль',
						fio: 'Введите ваше имя и фамилию',
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
			$(`.tooltip--map-${pos}`).toggleClass('tooltip-map--active');
		});
		$(document).on('click', '.close--map', () => {
			$(`.tooltip--map-${pos}`).removeClass('tooltip-map--active');
		});

		$('body').click(function (e) {
			if ($(e.target).closest('.tooltip-map--active').length === 0 && $('.tooltip-map--active').length) {
				$(`.tooltip--map-${pos}`).removeClass('tooltip-map--active');
			}
		});
	};

	let simpleBar = () => {
		if ($(window).width() > 767) {
			$.each($('.catalog-subnav'), (i, v) => {
				// eslint-disable-next-line no-new
				new SimpleBar(v);
			});
		}
	};

	let inputSearch = () => {
		const search = document.querySelector('input[type="search"]');

		search.addEventListener('input', () => {
			if (search.value.length > 2) {
				$('.search-result').addClass('search-result--is-active');
			} else {
				$('.search-result').removeClass('search-result--is-active');
			}
		});

		search.addEventListener('blur', () => {
			if (search.value.length > 2) {
				$('.search-result').removeClass('search-result--is-active');
			}
		});

		search.addEventListener('focus', () => {
			if (search.value.length > 2) {
				$('.search-result').addClass('search-result--is-active');
			}
		});

		if ($(window).width() < 1240) {
			$(document).on('click', '.btn--search', () => {
				$('.btn--search').addClass('btn--search-active');
				$('.search-result').toggleClass('search-result--is-active');
				$('body').toggleClass('is-fixed');
			});
		}
	};

	let cartSearch = () => {
		const el = document.getElementById('cart-quick-add');

		if (el) {
			el.addEventListener('input', () => {
				if (el.value.length > 2) {
					$('.cart-quick-add__body').addClass('cart-quick-add--is-active');
				} else {
					$('.cart-quick-add__body').removeClass('cart-quick-add--is-active');
				}
			});

			el.addEventListener('blur', () => {
				if (el.value.length > 2) {
					$('.cart-quick-add__body').removeClass('cart-quick-add--is-active');
				}
			});

			el.addEventListener('focus', () => {
				if (el.value.length > 2) {
					$('.cart-quick-add__body').addClass('cart-quick-add--is-active');
				}
			});
		}
	};

	let breadcrumbsNav = () => {
		$(document).on('click', '.js-breadcrumbs__item', function (e) {
			if ($(window).width() > 767) {
				e.preventDefault();
			}
			$(this).toggleClass('breadcrumbs__item--nav-active');
			$('body').click(function (event) {
				if ($('.breadcrumbs__item').hasClass('breadcrumbs__item--nav-active')) {
					if (!$(event.target).hasClass('breadcrumbs-nav__link')) {
						$('.breadcrumbs__item').removeClass('breadcrumbs__item--nav-active');
					}
				}
			});
		});
	};

	let counter = () => {
		$(document).on('click', '.js-counter-btn--minus', function () {
			let target = +$(this).parent().find('.js-counter-target').text();

			if (target !== 1) {
				target--;
			} else {
				target = 1;
			}
			$(this).parent().find('.js-counter-target').text(target);
		});

		$(document).on('click', '.js-counter-btn--plus', function () {
			let target = +$(this).parent().find('.js-counter-target').text();

			target++;
			$(this).parent().find('.js-counter-target').text(target);
		});
	};

	let filterItem = () => {
		$(document).on('click', '.js-filter-item__header', function () {
			$(this).parent().toggleClass('filter-item--active');
		});
	};

	let filterSlider = () => {
		$('.filter-slider__line').each(function () {
			let slider = $(this)[0];
			let sliderFrom = $(this).parent().find('[name="filter-slider__value--from"]')[0];
			let sliderTo = $(this).parent().find('[name="filter-slider__value--to"]')[0];
			let inputs = [sliderFrom, sliderTo];
			let type = $(this).data('range-type');

			if (type === 'price') {
				noUiSlider.create(slider, {
					start: [2500, 5900],
					connect: true,
					range: {
						min: 0,
						max: 10000,
					},
				});
			} else if (type === 'mm') {
				noUiSlider.create(slider, {
					start: [0.5, 7],
					connect: true,
					range: {
						min: 0,
						max: 10,
					},
					format: wNumb({
						decimals: 2,
						thousand: ' ',
					}),
				});
			}

			slider.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = values[handle];
			});

			inputs.forEach(function (input, handle) {
				input.addEventListener('change', function () {
					slider.noUiSlider.setHandle(handle, this.value);
				});
			});
		});
	};

	let sortItem = () => {
		$(document).on('click', '.js-sort-item__header', function () {
			if ($(this).parent().hasClass('sort-item__action--active')) {
				$(this).parent().removeClass('sort-item__action--active');
			} else {
				$('.sort-item__action').removeClass('sort-item__action--active');
				$(this).parent().addClass('sort-item__action--active');
				$(document).on('click', '.sort-item__link', function () {
					let text = $(this).find('.sort-item__name').text();

					$(this).parent().parent().find('.sort-item__current').text(text);
					$('.sort-item__action').removeClass('sort-item__action--active');
				});
			}
		});
		$('body').click(function () {
			if ($('.sort-item__action').hasClass('sort-item__action--active')) {
				$('.sort-item__action').removeClass('sort-item__action--active');
			}
		});
	};

	let tagsToggle = () => {
		$(document).on('click', '.js-tags__toggle', function () {
			if ($(this).parent().hasClass('tags--active')) {
				$(this).parent().removeClass('tags--active');
				$(this).text('Все запросы');
			} else {
				$(this).parent().addClass('tags--active');
				$(this).text('Скрыть');
			}
		});
	};

	let tabs = () => {
		$('.tabs__item').click(function () {
			let tabName = $(this).attr('show-tab');

			$(this).toggleClass('tabs__item--active').siblings().removeClass('tabs__item--active');
			if ($(this).hasClass('tabs__item--aside')) {
				$(this).closest('.sub-categories__aside').addClass('sub-categories__aside--active');
			}
			$(`.${tabName}`).toggleClass('tab--active').siblings().removeClass('tab--active');
		});
	};

	let passValidate = () => {
		const passwordInput = document.getElementById('pass-validate');
		const conditions = document.querySelectorAll('.form__requires__item');

		passwordInput.addEventListener('input', function () {
			let passValue = passwordInput.value;
			const re = /[A-Za-z][0-9]/;

			if (passValue.length > 8) {
				conditions[0].classList.add('form__requires__item--success');
			} else {
				conditions[0].classList.remove('form__requires__item--success');
			}

			if (re.test(passValue)) {
				conditions[1].classList.add('form__requires__item--success');
			} else {
				conditions[1].classList.remove('form__requires__item--success');
			}
		});
	};

	let cabinetPassValidate = () => {
		const passwordInput = document.getElementById('pass-cabinet-validate');
		const passwordRepeatInput = document.getElementById('pass-cab-repeat-validate');
		const conditions = document.querySelectorAll('.form__requires__item1');
		const requiresList = document.querySelector('.form__requires__list1');

		if (passwordRepeatInput) {
			passwordInput.addEventListener('input', function () {
				let passValue = passwordInput.value;
				const re = /[A-Za-z][0-9]/;

				if (passValue.length > 8) {
					conditions[0].classList.add('form__requires__item--success');
				} else {
					conditions[0].classList.remove('form__requires__item--success');
				}

				if (re.test(passValue)) {
					conditions[1].classList.add('form__requires__item--success');
				} else {
					conditions[1].classList.remove('form__requires__item--success');
				}
			});
			let li = document.createElement('li');

			li.classList.add('form__requires__item1');
			// eslint-disable-next-line consistent-return
			passwordRepeatInput.addEventListener('input', function () {
				if (passwordRepeatInput.value !== passwordInput.value) {
					passwordRepeatInput.classList.add('error');
					li.classList.remove('form__requires__item1--success');
					passwordRepeatInput.classList.remove('valid');
					passwordInput.classList.remove('valid');

					return false;
				}

				passwordRepeatInput.classList.add('valid');
				passwordInput.classList.add('valid');

				li.classList.add('form__requires__item1--success');
				li.innerHTML = 'Пароли совпадают';

				requiresList.insertAdjacentElement('beforeend', li);
			});
		}
	};

	let cabinetMobileNav = () => {
		$(document).on('click', '.tabs-v__item--active a', function (e) {
			e.preventDefault();
			$(this).closest('.tabs-v__list').toggleClass('tabs-v__list--active');
		});
	};

	let myOrderKitToggle = () => {
		$(document).on('click', '.my-order-product__kit-toggle-text', function () {
			let parent = $(this).closest('.my-order-product');
			let text = $(this);

			parent.toggleClass('my-order-product--show-kit');
			if (parent.hasClass('my-order-product--show-kit')) {
				text.text('Скрыть состав комплекта');
			} else {
				text.text('Показать состав комплекта');
			}
		});
	};

	let productColorSelect = () => {
		$(document).on('click', '.product-colors__item', function () {
			if (!$(this).hasClass('product-colors__item--all')) {
				if ($(this).hasClass('product-colors__item--active')) {
					$(this).removeClass('product-colors__item--active');
				} else {
					$(this).addClass('product-colors__item--active');
					$(this).siblings().removeClass('product-colors__item--active');
				}
			}
		});
	};

	let productBodySlider = () => {
		$('.js-product-body-slider__main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.js-product-body-slider__aside',
		});

		$('.js-product-body-slider__aside').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '.product-body-slider__aside-nav--prev',
			nextArrow: '.product-body-slider__aside-nav--next',
			asNavFor: '.js-product-body-slider__main',
			vertical: true,
			infinite: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						arrows: false,
						vertical: false,
					},
				},
			],
		});
	};

	let accordion = () => {
		$(document).on('click', '.js-accordion__item-header', function () {
			if ($(this).parent().hasClass('accordion__item--active')) {
				$(this).parent().removeClass('accordion__item--active');
			} else {
				$(this).parent().siblings().removeClass('accordion__item--active');
				$(this).parent().addClass('accordion__item--active');
			}
		});
	};

	let popupGallery = () => {
		$('.js-popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			},
			image: {},
		});
	};

	let prodctDetailsTablet = () => {
		const el = $('.product-body__details');

		if ($(window).width() < 1240 && $(window).width() > 767) {
			el.appendTo('.product-nav');
		} else {
			el.prependTo('.product-body__info');
		}
	};

	let productOptionsMobile = () => {
		$(document).on('click', '.product-options__toggle', function () {
			$(this).parent().toggleClass('product-options__toggle--active');
		});
	};

	let productDeliveryToggleInfo = () => {
		$(document).on('click', '.btn--delivery', function () {
			$(this).toggleClass('btn--delivery--active');
			$('.form--product-deivery').toggleClass('form--product-deivery--active');
		});
	};

	let managerSuccess = () => {
		$(document).on('click', '.manager-review__block .btn', function () {
			$('.manager-review .hide-success').toggleClass('hide-success--off');
			$('.manager-review .show-success').toggleClass('show-success--on');
		});
	};

	// map1
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

	// map2
	if ($('div').is('.tooltip-map__map')) {
		const map1 = document.getElementById('tooltip-map-office1');

		if (map1) {
			ymaps.ready(() => {
				// eslint-disable-next-line one-var
				let mapOffice = new ymaps.Map('tooltip-map-office1', {
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
				let mapStock = new ymaps.Map('tooltip-map-stock1', {
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
	}

	inputSelect();
	sandwich();
	catalogNav();
	popularCategoriesSlider();
	productSeenSlider();
	aboutBlockSlider();
	locationSelect();
	citySelect();
	modalLink();
	inputFile();
	validateForm();
	fastReview();
	tooltipMap('office');
	tooltipMap('stock');
	simpleBar();
	catalogSubnavInner();
	inputSearch();
	breadcrumbsNav();
	counter();
	filterItem();
	filterSlider();
	sortItem();
	tagsToggle();
	tabs();
	recommendSlider();
	passValidate();
	cabinetPassValidate();
	myOrderKitToggle();
	cabinetMobileNav();
	cartSearch();
	productColorSelect();
	productBodySlider();
	accordion();
	popupGallery();
	prodctDetailsTablet();
	productOptionsMobile();
	productDeliveryToggleInfo();
	managerSuccess();
});

let popularCategoriesSlider = () => {
	const sliderElem = $('.js-categories-prev');

	if ($(window).width() < 768 && !sliderElem.hasClass('slick-initializing')) {
		sliderElem.slick('unslick');
	}
};

let prodctDetailsTablet = () => {
	const el = $('.product-body__details');

	if ($(window).width() < 1240 && $(window).width() > 767) {
		el.appendTo('.product-nav');
	} else {
		el.prependTo('.product-body__info');
	}
};

$(window).on('resize', () => {
	popularCategoriesSlider();
	prodctDetailsTablet();
});
