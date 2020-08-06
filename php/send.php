<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
/*$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];*/
//var_dump($_POST['email']);
$footer_name;
$footer_phone;
$newsletter_email;

if (isset($_POST['newsletter_email'])) {
	sendEmail($_POST['newsletter_email']);
} else if (isset($_POST['footer_name']) && isset($_POST['footer_phone'])) {
	sendFooterForm($_POST['footer_name'], $_POST['footer_phone'], $_POST['message']);
} else {
	sendModalForm($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['message']);
}


function sendEmail($email)
{
	$title = "Новый пользователь Best Tour Plan";
	$body = "
	<h2>Подписка на новости</h2>
	<b>Почта:</b> $email<br>
	";

	send($title, $body, "Location: ../thanks.html");
}


function sendFooterForm($name, $phone, $message)
{
	// Формирование самого письма
	$title = "Новое обращение из подвала Best Tour Plan";
	$body = "
	<h2>Новое обращение</h2>
	<b>Имя:</b> $name<br>
	<b>Телефон:</b> $phone<br><br>
	<b>Сообщение:</b><br>$message
	";

	send($title, $body, "Location: ../thank-you.html");
}

function sendModalForm($name, $email, $phone, $message)
{
	$title = "Новое обращение из модального окна Best Tour Plan";
	$body = "
		<h2>Новое обращение</h2>
		<b>Имя:</b> $name<br>
		<b>Почта:</b> $email<br><br>
		<b>Телефон:</b> $phone<br><br>
		<b>Сообщение:</b><br>$message
		";

	send($title, $body, "Location: ../thank-you.html");
}


function send($title, $body, $trigger)
{
	// Настройки PHPMailer
	$mail = new PHPMailer\PHPMailer\PHPMailer();
	try {
		$mail->isSMTP();
		$mail->CharSet = "UTF-8";
		$mail->SMTPAuth   = true;
		// $mail->SMTPDebug = 2;
		$mail->Debugoutput = function ($str, $level) {
			$GLOBALS['status'][] = $str;
		};

		// Настройки вашей почты
		$mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
		//
		//
		$mail->SMTPSecure = 'ssl';
		$mail->Port       = 465;
		$mail->setFrom('ma-bur@mail.ru', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

		// Получатель письма
		$mail->addAddress('kalitoshka@ya.ru');
		//$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

		// Отправка сообщения
		$mail->isHTML(true);
		$mail->Subject = $title;
		$mail->Body = $body;

		//Проверяем отравленность сообщения
		if ($mail->send()) {
			$result = "success";
		} else {
			$result = "error";
		}
	} catch (Exception $e) {
		$result = "error";
		$status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
	}

	// Отображение результата
	// echo json_encode(["result" => $result, "status" => $status]);

	header($trigger);
}
