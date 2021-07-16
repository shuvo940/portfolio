(function($) {
	"use strict"

	// magnific Popup
	$(document).ready(function() {
		$('#video-link').magnificPopup({type:'inline',midClick : true});
	  });


	// Testimonial owl Carousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    dots: true,
	    items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	//sticky header
	$(window).scroll(function(){

	$("nav").toggleClass("scrolled" , $(this).scrollTop()>50);
		
	});
	//change nav color
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.change-color').addClass('newColor')
		} else {
			$('.change-color').removeClass('newColor')
		}
			
	})
	//change logo white to black 
	$(function () { 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) { 
				$('.navbar .navbar-brand img').attr('src','assets/img/logo-2.svg');
			}
			if ($(this).scrollTop() < 50) { 
				$('.navbar .navbar-brand img').attr('src','assets/img/logo.svg');
			}
		})
	});

	//smooth scroll initilize
	var scroll = new SmoothScroll('a[href*="#"]');
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 600
	});
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
	});




})(jQuery)