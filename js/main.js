// первый слайдер
let hotelSlider = new Swiper(".hotel-slider", {
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
let reviewsSlider = new Swiper(".reviews-slider", {
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
let menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", () => {
	console.log("click")
	document.querySelector(".navbar-menu").classList.toggle("navbar-menu_visible")
})
