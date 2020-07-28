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
