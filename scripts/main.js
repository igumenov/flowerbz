
  
$(document).ready(function() {


  function minus(){
    var current = $('#count_block .count').text();
    current.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    current= +current;
    current = current-(1 + Math.floor(Math.random() * 6));
    $('#count_block .count').text(current);
  }
  setInterval(function(){
    minus();
  }, 1000);

  
  newYear = new Date(2018, 3-1, 8); 
  $('#defaultCountdown').countdown({
    until: newYear,
    layout: '<div>{dn} <span>Дней</span></div><div class="dots">:</div><div>{hn} <span>Часов</span></div><div class="dots">:</div><div>{mn} <span>Минут</span></div><div class="dots">:</div><div>{sn} <span>Секунд</span></div> '
  });



  newYear2 = new Date(2018, 2-1, 14); 
  $('#fdgkldfg').countdown({
    until: newYear2,
    layout: '{dn} <span>дня</span>'
  }); 





  $("#range_25").ionRangeSlider({
    type: "double",
    min: 350,
    max: 50000,
    step: 10,
    grid: true,
    grid_num: 3,
});

$("#range_26").ionRangeSlider({
  type: "double",
  min: 350,
  max: 50000,
  step: 10,
  grid: true,
  grid_num: 3,
});
$(".opros1 .step a.btn.step_btn").click(function (event) {
  event.preventDefault();
  var step= $(this).attr('data-gotostep');
  $(this).closest('.opros').find('.datastep'+step).addClass('active');
  $(this).closest('.step').hide();
  $(this).closest('.opros').find('.step'+step).show();
  // alert(step);
});

	$('input[name=tell]').mask('+7(999)999-99-99');
    var h = window.innerHeight;
    $('#main').css({'height':h});


    $(".link").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        if($( window ).width()<767){
            $('.main .main_container header .right .menu').fadeOut();
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');

        }
    });
    $(".mobile_menu").click(function (event) {
        event.preventDefault();
        if($('.main .main_container header .right .menu').is(':hidden')){
            $('html, body').css('overflow', 'hidden');
            $('.main .main_container header .right .menu').fadeIn();
            $('.main .main_container header .right .menu').addClass('active');
        }else{
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');
            $('.main .main_container header .right .menu').fadeOut();
            $('.main .main_container header .right .menu').removeClass('active');
        }
    });

  $('form.validate_form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
    btn = form.find('input[type=submit]');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('input[type=text]').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('input[type=text]').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#ef6509'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },1500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
    event.preventDefault();
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        // form.submit();
        $('#page').fadeOut();
        $('#modal2').fadeIn(1500);
		
		
		var form_data = $(this).closest('form').serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "/send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
				$.fancybox.close();
				$.fancybox.open('<div class="message"><h2>Спасибо за заявку!</h2><p>В ближайшее время с Вами свяжется наш менеджер.</p></div>');
				function close(){
					$.fancybox.close();
				}
				setTimeout(close, 6000);
				
			}
		});
		
      }
    });
  });
	
	
});
$( window ).resize(function() {
    var h = window.innerHeight;
    $('#main').css({'height':h});
});
window.onload = function () {
  console.log(ymaps.geolocation.city);
  var city = ymaps.geolocation.city;
  var tel1 = $('.main .main_container header .right .cont a.tel');
  var tel2 = $('footer .cont a.tel');

  if(city=='Самара'){
    tel1.text('+7 (343) 351 72 81');
    tel1.attr('href','tel:+73433517281');
    tel2.text('+7 (343) 351 72 81');
    tel2.attr('href','tel:+73433517281');
    $('#main_city').text('г. '+city);
    $('#main_city2').text('г. '+city);

  }else if(city=='Казань'){
    tel1.text('+7 (843) 207 01 41');
    tel1.attr('href','tel:+78432070141');
    tel2.text('+7 (843) 207 01 41');
    tel2.attr('href','tel:+78432070141');
    $('#main_city').text('г. '+city);
    $('#main_city2').text('г. '+city);
  }else if(city=='Москва'){
    tel1.text('+7 (495) 241 19 21');
    tel1.attr('href','tel:+74952411921');
    tel2.text('+7 (495) 241 19 21');
    tel2.attr('href','tel:+74952411921');
    $('#main_city').text('г. '+city);
    $('#main_city2').text('г. '+city);
  }else if(city=='Самара'){
    tel1.text('+7 (846) 219 29 74');
    tel1.attr('href','tel:+78462192974');
    tel2.text('+7 (846) 219 29 74');
    tel2.attr('href','tel:+78462192974');
    $('#main_city').text('г. '+city);
    $('#main_city2').text('г. '+city);
  }else if(city=='Уфа'){
    tel1.text('+7 (347) 226 11 86');
    tel1.attr('href','tel:+73472261186');
    tel2.text('+7 (347) 226 11 86');
    tel2.attr('href','tel:+73472261186');
    $('#main_city').text('г. '+city);
    $('#main_city2').text('г. '+city);
  }
}