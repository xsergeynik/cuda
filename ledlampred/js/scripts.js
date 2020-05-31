$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* sliders */

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});
	
	now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#fff",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#fff",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#fff",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#fff",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#fff",
                "show": true
            }
        }
    });

    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer2").attr("data-timer", perem);
    $(".el-timer2").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#f2f2f2",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#a1e019",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#a1e019",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#a1e019",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#a1e019",
                "show": true
            }
        }
    });


	/* validate form */

	$(".order_form").submit(function(){
		if ($(this).find("input[name='name']").val() == "" && $(this).find("input[name='phone']").val() == "") {
			alert("Введите Ваши имя и телефон");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='name']").val() == "") {
			alert("Введите Ваше имя");
			$(this).find("input[name='name']").focus();
			return false;
		}
		else if ($(this).find("input[name='phone']").val() == "") {
			alert("Введите Ваш телефон");
			$(this).find("input[name='phone']").focus();
			return false;
		}
		return true;
	});

});