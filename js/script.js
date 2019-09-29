$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.nav-ul').toggleClass("active-menu");
        $(this).toggleClass("active-nav");
        $("body").toggleClass("over");
    });
    $('.nav-ul a').click(function () {
        $('.nav-ul').removeClass("active-menu");
        $(".menu-toggle").removeClass("active-nav");
        $("body").removeClass("over");
        
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.cont-1').css({
                "background-color": "rgba(0, 238, 255, 0.8)"
            })
        } else {
            $('.cont-1').css({
                "background-color": "transparent"
            })
        }
        if ($(window).scrollTop() > $('.cont-2').offset().top) {
            $('.home').css({
                "color": "yellow"
            });
        } else {
            $('.home').css({
                color: '#fff'
            });
        }
        if ($(window).scrollTop() > $('.section').offset().top - 150) {
            $('.home').css({
                "color": "#fff",
            });
            $('.ww').css({
                "color": "yellow",
            });

        } else {
            $('.ww').css({
                color: '#fff'
            });
        }
        if ($(window).scrollTop() > $('.section-2').offset().top - 150) {
            $('.ww').css({
                "color": "#fff",
            });
            $('.tm').css({
                "color": "yellow",
            });

        } else {
            $('.tm').css({
                color: '#fff'
            });
        }
        if ($(window).scrollTop() > $('.section-4').offset().top - 150) {
            $('.tm').css({
                "color": "#fff",
            });
            $('.cs').css({
                "color": "yellow",
            });

        } else {
            $('.cs').css({
                color: '#fff'
            });
        }
    });

    $(".inp-name").on('input', function () {
        if (/\d/.test($.trim($(".inp-name").val()))) {
            $(".inp-name").val($.trim($(".inp-name").val().replace(/\d/g, "")));
        }
    })


    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $("form").on("submit", function (e) {
        e.preventDefault();

        if ($.trim($(".inp-name").val())) {
            $(".inp-name").css({
                "background": "green"
            });
        } else {
            $(".inp-name").css({
                "background": "red"
            });
        }
        if (re.test($(".email-inp").val())) {
            $(".email-inp").css({
                "background": "green"
            })
        } else {
            $(".email-inp").css({
                "background": "red"

            });
        }
        if ($.trim($(".txta").val())) {
            $(".txta").css({
                "background": "green"
            });
        } else {
            $(".txta").css({
                "background": "red"
            });
        }

        if ($.trim($(".inp-name").val()) && re.test($(".email-inp").val()) && $.trim($(".txta").val())) {
            $(this)[0].submit();

        } else {
            return;
        }


    });


    $('.nav-ul a').on('click', function(e) {
		var tg = $(e.target).attr('data-id');
		var t = '#' + tg;
		var ofs = $(t).offset().top;
		$('html, body').animate({ scrollTop: ofs - 70 }, 500);
	});



})