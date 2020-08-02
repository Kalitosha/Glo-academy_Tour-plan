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
	document.querySelector(".navbar-menu").classList.toggle("navbar-menu_visible")

	let srcImage = document.querySelector(".menu-button__image").src

	if (srcImage === window.location.href.toString() + "img/three-bars.svg") {
		changeImage("img/x.svg")
	} else if (srcImage === window.location.href.toString() + "img/x.svg") {
		changeImage("img/three-bars.svg")
	}
})

function changeImage(pathImg) {
	console.log("click:", pathImg)
	document.querySelector(".menu-button__image").src = pathImg
}
