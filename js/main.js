let mySwiper = new Swiper(".swiper-container-1", {
	loop: true,
	navigation: {
		nextEl: ".slider-button_next-1",
		prevEl: ".slider-button_prev-1",
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
})

//второй стайдер добавлен для примера, он работает отдельно от первого и с клавиатуры и кликом мыши
let mySwiper2 = new Swiper(".swiper-container-2", {
	loop: true,
	navigation: {
		nextEl: ".slider-button_next-2",
		prevEl: ".slider-button_prev-2",
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
})
