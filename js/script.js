$(function() {
    var win_w = $(document).width();
    var win_h = $(window).height();

		if($(".main-slider .slide").length>0) {
		  $('.main-slider .slider').bxSlider({
		  });
		}
		if($(".main-slider2 .slide").length>0) {
		  $('.main-slider2 .slider').bxSlider({
		  });
		}
	$("#hamburger-icon").on("click", function() {
		$("body").toggleClass("active_m");
		$(".mobile-menu-toggle").slideToggle();
	});
	$(".b-toggle .toggle-title").on("click", function() {
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});
	$(".b-lang .lang-val").on("click", function() {
		$(".b-lang").toggleClass("active");
		$(".b-lang .list-lang").slideToggle();
	});
	$(".popup .close").on("click", function() {
		$(".popup").fadeOut();
		$("body").removeClass("pop-show");
	});
    $(".js-pop-question").on("click", function() {
        $("#pop-question").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });
    $(".js-pop-register").on("click", function() {
        $("#pop-register").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });
    $(".js-pop-subscribe").on("click", function() {
        $("#pop-subscribe").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });
    $(".js-pop-thanks").on("click", function() {
        $("#pop-thanks").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });
    $(".js-pop-congratulations").on("click", function() {
        $("#pop-congratulations").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });

    $(".js-pop-info").on("click", function() {
        $("#pop-info").fadeIn();
        $("body").addClass("pop-show");
        return false;
    });
	$(".js-pop-video").on("click", function() {
		$("#pop-video").fadeIn();
		$("body").addClass("pop-show");
		return false;
	});

    $("#js-tab-type-block").on("click", function() {
        $(this).addClass('active');
        $("#js-tab-type-table").removeClass('active');
        $('.tab-type-blocks').show(0);
        $('.tab-type-table').hide(0);
    });
    $("#js-tab-type-table").on("click", function() {
        $(this).addClass('active');
        $("#js-tab-type-block").removeClass('active');
        $('.tab-type-blocks').hide(0);
        $('.tab-type-table').show(0);
    });


  $(document).on('click', function(e) {
  if (!$(e.target).closest(".popup-wrapper").length) {
    $(".popup").fadeOut();
    $("body").removeClass("pop-show");
  }
    e.stopPropagation();
  });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".b-lang").length) {
            $(".b-lang .list-lang").slideUp();
        }
        e.stopPropagation();
    });

    $(".drop-select__value").on("click", function() {
        if($(this).parent(".drop-select").is(".active")){
        }else{
            $(".drop-select").find('.drop-select__list').slideUp();
            $(".drop-select").removeClass("active");
        }
        $(this).parent().find('.drop-select__list').slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    $(".drop-select-date__value").on("click", function() {
        if($(this).parent(".drop-select-date").is(".active")){
        }else{
            $(".drop-select-date").find('.drop-select-date__list').slideUp();
            $(".drop-select-date").removeClass("active");
        }
        $(this).parent().find('.drop-select-date__list').slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".drop-select").length) {
            $('.drop-select__list').slideUp();
            $('.drop-select').removeClass("active")
        }
        e.stopPropagation();
    });
// календарь
	if($("#datepicker").length>0) {

	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
			$('#open-datepicker').text(date)
		}
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
	
	
    }

// слайдер на главной
    if($("#b-slider-change .slides").length>0) {
        var $slider = $('#b-slider-change .slides');
        var $progressBar = $('#b-slider-change .slide-progress .progress');
        var $progressBarLabel = $('#b-slider-change .slide-steps');
        var slideControls = $(this).find('#b-slider-change');
        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
            var num = nextSlide + 1;
            numP = num.toString().padStart(2, 0);
            var numAll = nextSlide + 1;
            console.log(nextSlide);
            $('#b-slider-change').removeClass();
            $('#b-slider-change').addClass('slid-' + num);
            $('#b-slider-change .nav-active').text(num);
            $('#b-slider-change .step').text(numP);

            $progressBar
                .css('width', calc + '%')
            // .attr('aria-valuenow', calc );

            // $progressBarLabel.text( calc + '% completed' );

        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 400,
            infinite: false,
            prevArrow: $('.change-prev'),
            nextArrow: $('.change-next'),
            appendDots: slideControls,
            dots: true,
            responsive: [
                {
                    breakpoint: 1020,
                    settings: {
                        adaptiveHeight: true,

                    }
                }
            ],
            dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container
            customPaging: function (slider, i) {
                //FYI just have a look at the object to find aviable information
                console.log(slider);
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + '"><span class="string">' + slideNumber + '</span></a>';
            }
        });
    } // end if

  // слайдер другой ipo
    if (win_w > 1020) {
        if ($("#ipos-slider .slider").length > 0) {
            var $slider = $('#ipos-slider .slider');
            var $progressBar = $('#ipos-slider .slide-progress .progress');
            var $progressBarLabel = $('#ipos-slider .slide-steps');
            var slideControls = $(this).find('#ipos-slider');
            $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;
                var num = nextSlide + 1;
                numP = num.toString().padStart(2, 0);
                var numAll = nextSlide + 1;
                numA = (slick.slideCount - 2).toString().padStart(2, 0);
                console.log(nextSlide);

                $('#ipos-slider .step').text(numP);
                $('#ipos-slider .steps').text(numA);
                $progressBar
                    .css('width', calc + '%')
                // .attr('aria-valuenow', calc );

                // $progressBarLabel.text( calc + '% completed' );

            });

            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 400,
                infinite: false,
                prevArrow: $('#ipo-slide-prev'),
                nextArrow: $('#ipo-slide-next'),
                // appendDots: slideControls,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1020,
                        settings: 'unslick'
                    }
                ]
                // dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container

            });
        } // end if lenght
    }else{
        if ($("#ipos-slider .slider").length > 0) {
           // $("#ipos-slider .slider").slick('unslick');
        }
    } // end if win_w




        $(window).scroll(function () {
            var sticky = $('header'),
                scroll = $(window).scrollTop();

            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');



        });
    if($(".anchors-list").length>0) {
        var menuTop = $(".anchors-list").offset().top;
        var topPos = $('.anchors-list').offset().top;
        $(window).scroll(function () {
            var $sections = $('h4');
            $sections.each(function (i, el) {
                var top = $(el).offset().top - 80;
                var bottom = top + $(el).height();
                var scroll = $(window).scrollTop();
                var id = $(el).attr('id');
                if (scroll > top && scroll < bottom) {
                    $('a.active').removeClass('active');
                    $('a[href="#' + id + '"]').addClass('active');
                }
            })
            var top2 = $(document).scrollTop(),
                pip = $('.inside-footer').offset().top,
                height = $('.anchors-list').outerHeight() + 130;
            if (top2 > topPos && top2 < pip - height) {
                $('.anchors-list').addClass('fixed').removeAttr("style");
            } else if (top2 > pip - height) {
                $('.anchors-list').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
            } else {
                $('.anchors-list').removeClass('fixed');
            }
        });

        $(".anchors-list").on("click", "a", function (event) {
            // исключаем стандартную реакцию браузера
            event.preventDefault();
            // получем идентификатор блока из атрибута href
            var id = $(this).attr('href'),
                // находим высоту, на которой расположен блок
                top = $(id).offset().top - 80;
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
    }


	setTimeout(function() {
        if (win_w < 1020){
            if ($(".graf-scroll").length > 0) {
                var el1 = $('.graf-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 20
                });
                var api1 = el1.data('jsp');
            }
            if ($(".steps-list__scroll").length > 0) {
                var el7 = $('.steps-list__scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 200
                });
                var api7 = el7.data('jsp');
            }
        }
        if (win_w < 950){
            if ($(".lvl9-scroll").length > 0) {
                var el2 = $('.lvl9-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 300
                });
                var api2 = el2.data('jsp');
            }
        }

        if (win_w < 950){
            if ($(".bs-parts").length > 0) {
                var el3 = $('.bs-parts').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 170
                });
                var api3 = el3.data('jsp');
            }
        }
        if (win_w < 1020){
            if ($(".ipos-right-scroll").length > 0) {
                var el4 = $('.ipos-right-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 20
                });
                var api4 = el4.data('jsp');
            }
        }
        if (win_w < 1020){
            if ($(".ipos-full-scroll").length > 0) {
                var el5 = $('.ipos-full-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 30
                });
                var api5 = el5.data('jsp');
            }
                if ($(".ipos-full__slider--scroll").length > 0) {
                    var el6 = $('.ipos-full__slider--scroll').jScrollPane({
                        showArrows: true,
                        verticalArrowPositions: 'after',
                        horizontalArrowPositions: 'after',
                        arrowButtonSpeed: win_w - 30
                    });
                    var api6 = el6.data('jsp');
                }
        }

    }, 200);

    if($(".select").length>0) {
        $('.select').ikSelect();
    }


	$(window).resize(function(){
    win_w = $(document).width();
	setTimeout(function() {
        console.log(win_w);
        if (win_w < 1020){
            if ($(".graf-scroll").length > 0) {
                var el1 = $('.graf-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 20
                });
                var api1 = el1.data('jsp');
            }
            if ($(".steps-list__scroll").length > 0) {
                var el7 = $('.steps-list__scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 200
                });
                var api7 = el7.data('jsp');
            }
            if ($("#ipos-slider .slider").length > 0) {
            // $("#ipos-slider .slider").slick('unslick');
            }
        }else {
            if ($(".graf-scroll").length > 0) {
                $('.graf-scroll').jScrollPane().data().jsp.destroy();
            }
            if ($(".steps-list__scroll").length > 0) {
                $('.steps-list__scroll').jScrollPane().data().jsp.destroy();
            }
            if ($("#ipos-slider .slider").length > 0) {
                var $slider = $('#ipos-slider .slider');
                var $progressBar = $('#ipos-slider .slide-progress .progress');
                var $progressBarLabel = $('#ipos-slider .slide-steps');
                var slideControls = $(this).find('#ipos-slider');
                $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;
                    var num = nextSlide + 1;
                    numP = num.toString().padStart(2, 0);
                    var numAll = nextSlide + 1;
                    numA = (slick.slideCount - 2).toString().padStart(2, 0);
                    console.log(nextSlide);

                    $('#ipos-slider .step').text(numP);
                    $('#ipos-slider .steps').text(numA);
                    $progressBar
                        .css('width', calc + '%')
                    // .attr('aria-valuenow', calc );

                    // $progressBarLabel.text( calc + '% completed' );

                });

                $slider.slick('reinit');
            } // end if lenght

        }
        if (win_w < 950){
            if ($(".lvl9-scroll").length > 0) {
                var el2 = $('.lvl9-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 300
                });
                var api2 = el2.data('jsp');
            }
        }else {
            if ($(".lvl9-scroll").length > 0) {
                $('.lvl9-scroll').jScrollPane().data().jsp.destroy();
            }
        }

        if (win_w < 950){
            if ($(".bs-parts").length > 0) {
                var el3 = $('.bs-parts').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: 170
                });
                var api3 = el3.data('jsp');
            }
        }else {
            if ($(".bs-parts").length > 0) {
                $('.bs-parts').jScrollPane().data().jsp.destroy();
            }
        }
        if (win_w < 1020){
            if ($(".ipos-right-scroll").length > 0) {
                var el4 = $('.ipos-right-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 20
                });
                var api4 = el4.data('jsp');
            }
        }else {
            if ($(".ipos-right-scroll").length > 0) {
                $('.ipos-right-scroll').jScrollPane().data().jsp.destroy();
            }
        }
        if (win_w < 1020){
            if ($(".ipos-full-scroll").length > 0) {
                var el5 = $('.ipos-full-scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 30
                });
                var api5 = el5.data('jsp');
            }
            if ($(".ipos-full__slider--scroll").length > 0) {
                var el6 = $('.ipos-full__slider--scroll').jScrollPane({
                    showArrows: true,
                    verticalArrowPositions: 'after',
                    horizontalArrowPositions: 'after',
                    arrowButtonSpeed: win_w - 30
                });
                var api6 = el6.data('jsp');
            }
        }else {
            if ($(".ipos-full-scroll").length > 0) {
                $('.ipos-full__slider--scroll').jScrollPane().data().jsp.destroy();
            }
            if ($(".ipos-full__slider--scroll").length > 0) {
                $('.ipos-full-scroll').jScrollPane().data().jsp.destroy();
            }
        }

        if (win_w < 950) {
            $("#js-tab-type-block").addClass('active');
            $("#js-tab-type-table").removeClass('active');
            $('.tab-type-blocks').show(0);
            $('.tab-type-table').hide(0);
        }
	}, 200);

	});
    if($(".countdown").length>0) {

        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');

            function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        var deadline = "December 30 2020 00:00:00 GMT+0300";
        // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
        initializeClock('countdown1', deadline);
        initializeClock('countdown2', deadline);
        initializeClock('countdown3', deadline);
    }
});



