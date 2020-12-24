(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// hidding submenu 
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('li.dropdown > a').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this).parent('li.dropdown').children('ul').slideToggle();
	
				// adding class to item container
				$(this).parent().toggleClass('open');
	
				return false;
	
			});
		});
	}
	
	hiddenBarMenuConfig();
	
	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.hidden-bar-opener');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	//Panels Toggle (Shopping Cart Page)
	if ($('.toggle-panel').length) {
		var targetPanel = $('.toggle-content');
		
		//Show Panel
		$('.toggle-panel').on('click', function () {
			$(this).toggleClass('active-panel');
			$(this).next(targetPanel).fadeToggle(300);
		});
	}
	
	
	
	//Panels Toggle (Shopping Cart Page)
	if ($('#audio-player').length) {
	//post audio
	const audioPlayer = new Plyr('#audio-player',{
		controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume',],
		hideControls: true,
	});
	}
	
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:4,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			/*animateOut: 'fadeOut',
      		animateIn: 'fadeIn',*/
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1300:{
					items:1
				}
			}
		});    		
	}
	
	
	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			/*animateOut: 'fadeOut',
      		animateIn: 'fadeIn',*/
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
				1300:{
					items:2
				}
			}
		});    		
	}
	
	
	//Single Item Carousel
	if ($('.economics-items-carousel').length) {
		$('.economics-items-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1300:{
					items:1
				}
			}
		});    		
	}
	
	
	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:5,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			/*animateOut: 'fadeOut',
      		animateIn: 'fadeIn',*/
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
				1300:{
					items:3
				}
			}
		});    		
	}
	
	
	//Three Item Carousel
	if ($('.related-item-carousel').length) {
		$('.related-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
				1300:{
					items:3
				}
			}
		});    		
	}
	
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}
	
	
	//Three Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 8000,
			/*animateOut: 'fadeOut',
      		animateIn: 'fadeIn',*/
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	//Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-4'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	
	
	// Product Carousel Slider
	if ($('.shop-page .image-carousel').length && $('.shop-page .thumbs-carousel').length) {

		var $sync3 = $(".shop-page .image-carousel"),
			$sync4 = $(".shop-page .thumbs-carousel"),
			flags = false,
			durations = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flags) {
						flags = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, durations, true]);
						flags = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin: 10,
					items: 1,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2,
				            autoWidth: false
				        },
				        400:{
				            items:3,
				            autoWidth: false
				        },
				        600:{
				            items:4,
				            autoWidth: false
				        },
				        900:{
				            items:5,
				            autoWidth: false
				        },
				        1000:{
				            items:6,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), durations, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flags) {
				flags = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, durations, true]);
				flags = false;
			}
		});

	}
	
	
	//Progress Bar / Levels
	if($('.skill-progress .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			//$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
		});
	}

	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});	

})(window.jQuery);