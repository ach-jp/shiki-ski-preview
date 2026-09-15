/*
Author : Kazuhiro Ikeda
*/

$(function () {

    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('hoge').addClass('fixed');
        } else {
            $('hoge').removeClass('fixed');
        }
    });

    $( ".toggle" ).css( "cursor", "pointer" );
    $( ".toggle" ).on( "click", function() {
        var panelId = $(this).attr( "data-title" );
        var panel = "#" + panelId;
        $(this).toggleClass( "active" );//開いた時、ボタンにクラスを追加
        $(panel).fadeToggle( "fast" );//”slow”、”normal”、”fast”
    });

    $('#drawer a').on('click', function(){
        $('.drawer_button').click();
    });

    $('.list-btn').each(function () {
        var moveElm = $(this),
            delayTime = 100,
            moveTimer = 0;

        moveElm.on('mousemove', function () {
            if (!moveElm.hasClass('active')) {
                clearTimeout(moveTimer);
                moveTimer = setTimeout(function () {
                    moveElm.addClass('active');
                    moveElm.find('.sub-panel').slideDown("fast");
                }, delayTime);
            }
        }).on('mouseleave', function () {
            clearTimeout(moveTimer);
            moveElm.removeClass('active');
            moveElm.find('.sub-panel').slideUp("fast");
        });
    });

    $('.list-btn-sub').each(function () {
        var moveElm = $(this),
            delayTime = 100,
            moveTimer = 0;

        moveElm.on('mousemove', function () {
            if (!moveElm.hasClass('active')) {
                clearTimeout(moveTimer);
                moveTimer = setTimeout(function () {
                    moveElm.addClass('active');
                    moveElm.find('.under-sub-panel').slideDown("fast");
                }, delayTime);
            }
        }).on('mouseleave', function () {
            clearTimeout(moveTimer);
            moveElm.removeClass('active');
            moveElm.find('.under-sub-panel').slideUp("fast");
        });
    });

});