/**
 * Created by mattriley on 19/04/2016.
 */
$(document).ready(function(){
    new WOW().init();
    var fontSize = $('body').css('font-size');


    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $anchor.blur();
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();

        });
    });

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });



    $("#header h1").fitText(
        1.2, {
            minFontSize: '16px',
            maxFontSize:  '64px',
        }
    );
    $("section h1").fitText(
        1.2, {
            minFontSize: '32px',
            maxFontSize:  '64px',
        }
    );
    $("h2").fitText(
        1.2, {
            minFontSize: '16px',
            maxFontSize:  '32px',
        }
    );
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").addClass("affix"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar-fixed-top").removeClass("affix"); // if not, change it back to transparent
    }
    var position = $(this).scrollTop();

    $('section').each(function() {
        var target = $(this).offset().top - 90;
        var id = $(this).attr('id');

        if (position >= target) {
            $("#navbar > ul > li > a").removeClass('active');
            $("#navbar > ul > li > a[href='#" + id + "']").addClass('active');
        }
    });
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").addClass("affix"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-fixed-top").removeClass("affix"); // if not, change it back to transparent
        }

        var position = $(this).scrollTop();

        $('section').each(function() {
            var target = $(this).offset().top - 90;
            var id = $(this).attr('id');

            if (position >= target) {
                $("#navbar > ul > li > a").removeClass('active');
                $("#navbar > ul > li > a[href='#" + id + "']").addClass('active');
            }
        });
    });
    $(".rotate").textrotator({
        animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 3000 // How many milliseconds until the next word show.
    });
    var charts = $('.easyPieChart');
    charts.easyPieChart({
        animate: 1000,
        onStep: function(old, to, current) {
            $('.chart').find('span').text(~~current);
        }
    });

    setInterval(function() {
        var num = Math.floor((Math.random()) * 100)
        charts.each(function() {
            $(this).data('easyPieChart').update(num);
        });
    }, 5000);


});