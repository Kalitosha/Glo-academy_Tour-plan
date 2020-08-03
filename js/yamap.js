ymaps.ready(init)

function init() {
	var myMap = new ymaps.Map(
			"map",
			{
				center: [55.76, 37.64],
				zoom: 10,
			},
			{
				searchControlProvider: "yandex#search",
			}
		),
		// Создаем геообъект с типом геометрии "Точка".

		myPieChart = new ymaps.Placemark()

	myMap.geoObjects.add(
		new ymaps.Placemark(
			[55.694843, 37.435023],
			{
				balloonContent: "цвет <strong>носика Гены</strong>",
				iconCaption: "Очень длиннный, но невероятно интересный текст",
			},
			{
				preset: "islands#greenDotIconWithCaption",
				iconColor: "#735184",
			}
		)
	)
}
// https://tech.yandex.ru/maps/jsbox/2.1/placemark

/*
<!DOCTYPE html>
<html>
<head>
    <title>Добавление метки на карту</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--
        Укажите свой API-ключ. Тестовый ключ НЕ БУДЕТ работать на других сайтах.
        Получить ключ можно в Кабинете разработчика: https://developer.tech.yandex.ru/keys/
    -->
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>
    <script src="placemark.js" type="text/javascript"></script>
	<style>
        html, body, #map {
            width: 100%; height: 100%; padding: 0; margin: 0;
        }
    </style>
</head>
<body>
    <div id="map"></div>
</body>
</html>*/
