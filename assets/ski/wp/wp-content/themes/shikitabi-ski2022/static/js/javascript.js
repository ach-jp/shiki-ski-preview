$(function () {
//smooth scroll
	var windowWidth = $(window).width();
	var windowSm = 750;

	$(window).load(function () {
		if (windowWidth <= windowSm) {
			$('a[href^="#"]').click(function () {
				var headerHight = 60;
				var speed = 500;
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top-headerHight;
				$("html, body").animate({
					scrollTop: position
				}, speed, "swing");
				return false;
	});
		} else {
			$('a[href^="#"]').click(function () {
				var headerHight = 120;
				var speed = 500;
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top-headerHight;
				$("html, body").animate({
					scrollTop: position
				}, speed, "swing");
				return false;
	});
		}
	});

//pagetop
	var nav = $('.pagetop'),
		offset = nav.offset();

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			nav.addClass('opacity');
		} else {
			nav.removeClass('opacity');
		}
	});

//slider
	/*
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		dots:true,
		prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
		nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
		customPaging: function(slick,index) {
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			return '<img src=" ' + targetImage + ' "/>';
		},
		responsive: [{
			breakpoint: 960,
			settings: {

			}
		}]
	});
	$('.voice_slider').slick({
		infinite: true,
		arrows: true,
		dots:true,
		prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
		nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
		customPaging: function(slick,index) {
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			return '<img src=" ' + targetImage + ' "/>';
		},
		responsive: [{
			breakpoint: 960,
			settings: {

			}
		}]
	});
	$(".slick-prev, .slick-next").attr("href", "");
	$('.recruit_slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		dots:true,
		slidesToShow: 3,
		prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
		nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
		customPaging: function(slick,index) {
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			return '<img src=" ' + targetImage + ' "/>';
		},
		responsive: [{
			breakpoint: 960,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	*/

//header_menu
	$('.header_menu').click(function () {
		$('body').toggleClass('active');
	});
	$('.overlay').on('click', function () {
		$('body').removeClass('active');
	});

//form submit
	$("#tourlist_page").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_count").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_sort").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_sort1").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_sort2").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_sort3").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_sort4").change(function(){
		$('input[name="page"]').val(1);
		$("#tourlist_form").submit();
	});
	$("#tourlist_page1").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page2").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page3").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page4").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page5").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page6").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page7").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page8").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page9").change(function(){
		$("#tourlist_form").submit();
	});
	$("#tourlist_page10").change(function(){
		$("#tourlist_form").submit();
	});

//accordion
	$(".top_q_box").on("click", function() {
		$(this).toggleClass("active").next().slideToggle();
	});
	$(".side_menu_btn").on("click", function() {
		$(this).toggleClass("active").next().slideToggle();
	});

	$('.tab').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').removeClass('show');
		const index = $(this).index();
		$('.panel').eq(index).addClass('show');
	});

//morebtn
	var count = 100;
	var thisText = $('.more_btn_content').prev('.more_txt_content').text();
	var textLength = thisText.length;
	if (textLength > count) {
		$('.more_btn_content').click(function(){
			var show_text = $(this).prev('.more_txt_content');
			var small_height = 140;
			var original_height = show_text.css({height : 'auto'}).height();
			$(this).removeClass('none');
			if(show_text.hasClass('open')){
				/*CLOSE*/
				show_text.height(original_height).animate({height:small_height},300);
				show_text.removeClass('open');
				$(this).text('続きを見る').removeClass('active');
			}else{
				/*OPEN*/
				show_text.height(small_height).animate({height:original_height},300, function(){
					show_text.height('auto');
				});
				show_text.addClass('open');
				$(this).text('閉じる').addClass('active');
			}
		});
	} else {
		$('.more_btn_content').addClass('none');
		$('.more_btn_content').prev('.more_txt_content').addClass('none');
	}

	$('.more_btn_short').click(function(){
		var show_text = $(this).prev('.more_txt_short');
		var small_height = 90;
		var original_height = show_text.css({height : 'auto'}).height();
		$(this).removeClass('none');
		if(show_text.hasClass('open')){
			/*CLOSE*/
			show_text.height(original_height).animate({height:small_height},300);
			show_text.removeClass('open');
			$(this).text('+　続きを見る').removeClass('active');
		}else{
			/*OPEN*/
			show_text.height(small_height).animate({height:original_height},300, function(){
				show_text.height('auto');
			});
			show_text.addClass('open');
			$(this).text('-　閉じる').addClass('active');
		}
	});

	// ifrme存在チェック
	if ($('.calendar_iframe iframe')[0]) {
		$(window).on('message', function(e) {
			// 制限
			if (e.originalEvent.origin !== 'https://www.shikisystems.com') {
				return;
			}
			// iframeの高さを取得
			var iframe_height = e.originalEvent.data;
			// iframeに高さを設定
			$('.calendar_iframe iframe').css('height', iframe_height + 'px');
		});
	}

//close
	$('.campaignpop_footer_close').click(function () {
		$(this).parents('.campaignpop_footer').addClass('none');
	});
});


wpcf7c_scroll = function(unit_tag) {
	// contact form7 add-confirm OVERWRIDE
	jQuery(jQuery.find("input[name=_wpcf7_unit_tag]")).each(function(){
		if(jQuery(this).val() == unit_tag) {
			var parent = jQuery(this).parents("form");
			var speed = 500; //SPEED CHANGE
			var position = parent.offset().top - 120; //OFFSET CHANGE
			if(jQuery('.wpcf7c-anchor').size() != 0) {
				position = jQuery('.wpcf7c-anchor').offset().top - 120; //OFFSET CHANGE
			}
			jQuery("html, body").animate({scrollTop:position}, speed, "swing");
		}
	});
}