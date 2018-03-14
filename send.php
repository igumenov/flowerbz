<?
	$name = $_POST['name'];
	$tel = $_POST['tell'];
	$mail = $_POST['email'];
	$text = $_POST['text'];
	$site = $_SERVER['SERVER_NAME'];
	$form_name = $_POST['form_name'];
	$to = 'rockflowers@mail.ru';
	//$to = '9323206@gmail.com';
	$subject = 'Заявка с сайта '. $site;



	if($form_name == 'opros1'){
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<table border="1">
							<tr>
								<td>Какое количество цветов вы 
								предполагаете закупить?</td>
								<td>'.$_POST['opros_1_step1'].'</td>
							</tr>
							<tr>
								<td>Место отгрузки</td>
								<td>'.$_POST['opros_1_step2'].'</td>
							</tr>
							<tr>
								<td>Место продажи</td>
								<td>'.$_POST['opros_1_step3'].'</td>
							</tr>
							<tr>
								<td>Будете ли делать доп. продажи бумаги для упаковки</td>
								<td>'.$_POST['opros_1_step4'].'</td>
							</tr>
						</table>
						<p>Имя: '.$_POST['name'].'</p>
						<p>Телефон: '.$_POST['tell'].'</p>                        
					</body>
				</html>'; //Текст нащего сообщения можно использовать HTML теги
	}elseif($form_name == 'opros2'){
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<table border="1">
							<tr>
								<td>Как планируете продавать?</td>
								<td>'.$_POST['opros_2_step1'].'</td>
							</tr>
							<tr>
								<td>Какое количество цветов планируете реализовать?</td>
								<td>'.$_POST['opros_2_step2'].'</td>
							</tr>
							<tr>
								<td>Знаете ли вы технологии и методы продажи цветов?</td>
								<td>'.$_POST['opros_2_step3'].'</td>
							</tr>
							<tr>
								<td>Будете ли делать доп. продажи бумаги для упаковки</td>
								<td>'.$_POST['opros_2_step4'].'</td>
							</tr>
						</table>
						<p>Имя: '.$_POST['name'].'</p>
						<p>Телефон: '.$_POST['tell'].'</p>                        
					</body>
				</html>'; //Текст нащего сообщения можно использовать HTML теги

	}else{
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<p>Имя: '.$_POST['name'].'</p>
						<p>Телефон: '.$_POST['tell'].'</p>                        
						<p>E-mail: '.$_POST['email'].'</p>                        
						<p>Текст: '.$_POST['text'].'</p>                         
					</body>
				</html>'; //Текст нащего сообщения можно использовать HTML теги

	}

	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	








	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
if($mail){
	include 'PHPMailer/src/Exception.php';
	include 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';
	$email = new PHPMailer();
	$email->CharSet = 'utf-8';
	$email->From      = 'you@example.com';
	$email->FromName  = 'rockflowers';
	$email->Subject   = 'Запрос бизнесплана';
	$body = '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Добрый день, Уважаемый '.$name.'</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Меня зовут Глухих Артем, и, если ты читаешь эти строки, ты уже посетил мой сайт и тебе интересно заработать на тюльпанах 8 марта 2018 года.</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Это хорошее желание. Я тоже этого хочу, и для этого нужны конкретные действия.</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Что я уже сделал на сегодняшний день:<br/>- Снял склад для цветов в черте города<br/>- Подписал договор на поставку 300 000 тюльпанов напрямую из Голландии с надежным поставщиком<br/>- Внес предоплату более 2 миллионов рублей<br/>- Создал сайт и настроил рекламу<br/>- Завел блог и ежедневно пишу в нем о том, что делаю и как двигаюсь к цели<br/>- Каждый день сам обрабатываю заявки и веду продажи.<br/>- Уже сейчас распродано почти 40% партии</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Что можешь ты сделать уже сегодня:<br/>- Подписаться на мой блог по этой ссылке (<a href="https://vk.com/myrockblog">https://vk.com/myrockblog</a>)<br/>- Изучить бизнес-план который я тебе скинул в этом письме (смотри в приложение)<br/>- Выбрать тот объем цветов и тариф<br/>- Написать мне или позвонить по телефону<br/>- Заключить договор и заработать до 430 тысяч рублей на цветочном безумии 2018 года</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Что скажешь? Готов поучаствовать в этом захватывающем мероприятии?</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">По любым вопросам, я всегда на связи, напоминаю, меня зовут Глухих Артем.</p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; "><b>Со мной можно связаться:</b><br/>
VK: <a href="https://vk.com/artem_glukhih">https://vk.com/artem_glukhih</a><br/>БЛОГ: <a href="https://vk.com/artem_glukhih">https://vk.com/artem_glukhih</a><br/>Тел: <a href="tel:+7 (343) 243-66-29">+7 (343) 243-66-29</a><br/>Почта: <a href="mailto:rockflowers@mail.ru">rockflowers@mail.ru</a></p>';
	$body .= '<p style=" font-family: Arial; line-height: 24px; font-size: 15px; ">Так же доступен в Viber/Whatsapp /Telegram</p>';
	$email->Body      = $body;
	$email->IsHTML(true);
	$email->AddAddress($mail);


	$email->AddAttachment('flowerbz.pdf');

	return $email->Send();
}
?>