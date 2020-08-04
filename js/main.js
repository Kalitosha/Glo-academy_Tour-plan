$(document).ready(() => {
	// первый слайдер
	const hotelSlider = new Swiper(".hotel-slider", {
		loop: true,
		navigation: {
			nextEl: ".hotel-slider__button_next",
			prevEl: ".hotel-slider__button_prev",
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
	})

	// второй слайдер
	const reviewsSlider = new Swiper(".reviews-slider", {
		loop: true,
		navigation: {
			nextEl: ".reviews-slider__button_next",
			prevEl: ".reviews-slider__button_prev",
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
	})

	// параллакс в newsletter
	$(".parallax-window").parallax({
		imageSrc: "img/newsletter-bg.jpg",
	})

	// мобильное меню
	const menuButton = document.querySelector(".menu-button")
	menuButton.addEventListener("click", () => {
		document.querySelector(".navbar-menu").classList.toggle("navbar-menu_visible")

		const srcImage = document.querySelector(".menu-button__image").src

		if (srcImage === window.location.href.toString() + "img/three-bars.svg") {
			changeImage("img/x.svg")
		} else if (srcImage === window.location.href.toString() + "img/x.svg") {
			changeImage("img/three-bars.svg")
		}
	})

	function changeImage(pathImg) {
		// console.log("click:", pathImg)
		document.querySelector(".menu-button__image").src = pathImg
	}

	// Модальные окна
	const closeModalButton = $(".modal__close")
	closeModalButton.on("click", closeModal)
	$(document).keyup((e) => {
		if (e.key === "Escape") {
			console.log("Escape")
			// escape key maps to keycode `27`
			closeModal(e)
		}
	})

	function closeModal(event) {
		// console.log("closeModal:")
		event.preventDefault()
		$(".modal__overlay").removeClass("modal__overlay_visible")
		$(".modal__dialog").removeClass("modal__dialog_visible")
	}

	let modalButton = $("[data-toggle=modal]")
	modalButton.on("click", openModal)

	function openModal() {
		let targetModal = $(this).attr("data-href")
		console.log("openModal: ", targetModal)

		$(targetModal).find(".modal__overlay").addClass("modal__overlay_visible")
		$(targetModal).find(".modal__dialog").addClass("modal__dialog_visible")
	}

	//обработка форм
	/*$(".newsletter__subscribe").each(function () {
		$(this).validate({
			errorClass: "newsletter__error",
			rules: {
				newsletter_email: {
					required: true,
					email: true,
				},
			},
			messages: {
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com",
				},
			},
		})
	})*/

	$(".form").each(function () {
		$(this).validate({
			errorClass: "form__error",
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				newsletter_email: {
					required: true,
					email: true,
				},
				phone: "required",
			},
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "The name is too short",
				},
				email: {
					required: "Required field",
					email: "invalid email",
				},
				newsletter_email: {
					required: "Required field",
					email: "invalid email",
				},
				phone: {
					required: "Required field",
				},
			},
		})
	})
})
