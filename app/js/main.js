$(function() {

	// Smooth scroll for anchor link
	$(".menu__link").on("click", function (event) {

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1600);
	});

	// Menu in scroll mobile
	$(window).scroll(function() {
		var header_height = $(".header").height();
		
		if($(this).scrollTop()>1){
			$(".header").addClass('header_scroll');
			$(".header__wrap").addClass('header__wrap_scroll');
			$(".select").addClass('select_scroll');
			$(".select__list").addClass('select__list_scroll');
			$(".wrap-top").css('padding-top', header_height);

		}
		else if ($(this).scrollTop()<1){
			$(".header").removeClass('header_scroll');
			$(".header__wrap").removeClass('header__wrap_scroll');
			$(".select").removeClass('select_scroll');
			$(".select__list").removeClass('select__list_scroll');
			$(".wrap-top").css('padding-top','0');
		}
	});

	// Show block "middle__open-block"
	$('.open-block').hide();

	$('.middle__btn').click(function() {
		$('.open-block').slideToggle("500");
		$(this).toggleClass('middle__btn_open');
		
	});

	// Buttom Top

	$('.top-btn').hide();
    
    $(function() {
    
		$(window).scroll(function() {
			if($(this).scrollTop() > 600) { 
				$('.top-btn').fadeIn();
			} else {
				$('.top-btn').fadeOut();
			}
    	});
		$('.top-btn').click(function() {
			$('body,html').animate({
				scrollTop:0}, 1500);
			return false;
		});
	});

	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       140,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();
	
	// Animate.css
	$('.middle__block').addClass('animated fadeIn');

	// Section modal
	$(".top__btn").click(function(evt){
		$(".modal-top").removeClass("hidden");
		$(".overlay").removeClass("hidden");
		evt.preventDefault();
	});

	$(".btn-modal").click(function(evt){
		$(".modal-download").removeClass("hidden");
		$(".overlay").removeClass("hidden");
		evt.preventDefault();
	});

	$(".overlay, .btn_cancel, .modal__close").click(function(){
		$(".modal").addClass("hidden");
		$(".overlay").addClass("hidden");
	});

	// Select open
	$('.select__current').click(function(evt) {
		$(this).parent('.select').toggleClass('select_open');
		$(this).next('.select__list').toggleClass('select__list_open');
		$(this).closest('.select').children('.select__arrow').toggleClass('select__arrow_open');
		evt.preventDefault();
	});

	$('.select__link').click(function() {
		var current_flag = $(this).html();
		$(this).closest('.select').children('.select__current').html(current_flag);
		$(this).closest('.select').children('.select__arrow').removeClass('select__arrow_open');
		$(this).closest('.select').removeClass('select_open');
		$(this).closest('.select__list').removeClass('select__list_open');
	});

	$(document).mouseup(function (e) {
		var container = $(".select");
		if (container.has(e.target).length === 0){
			$('.select').children('.select__arrow').removeClass('select__arrow_open');
			$('.select').removeClass('select_open');
			$('.select__list').removeClass('select__list_open');
		}
	});
	// Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("toggle-mnu_open");
		$(".header__wrap").slideToggle();
      	return false;
	});

	// Click links for header
	$(function() {
		if($(window).width() < 993) { 
			$(".header .menu__link, .select__link").click(function() {
				$(".toggle-mnu").toggleClass("toggle-mnu_open");
				$(".header__wrap").slideToggle();
			});
		}
		
	});

});
