// from typed import 
$(document).ready(()=>{
	$(".about-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	$(".portfolio-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	$(".contact-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	// if($(document).scrollTop() == $('#about').offset().top){
	// 	console.log("You made it!");
	// }
	$(document).scroll(()=>{
		// console.log(`Current scroll position is ${$(document).scrollTop()}`)
		// console.log(`About section is ${$('#about').offset().top}`);
		if($(document).scrollTop() > $('#about').offset().top - 50){
			// console.log($('#about').offset().top);
			$('.my-name').show();
		}else{
			$('.my-name').hide();
		}

		console.log(`document: ${$(document).scrollTop()}`);
		console.log(`skills: ${$('.empty').offset().top - $(window).height()}`);

		if($(document).scrollTop() > $('.empty').offset().top - $(window).height() + 35){
			console.log("Made it!");
			$('.skills').fadeIn('slow');
			$('.javascript').fadeIn('slow');
			setTimeout(function(){ $('.react').fadeIn('slow'); }, 150);
			setTimeout(function(){ $('.python').fadeIn('slow'); }, 300);
			setTimeout(function(){ $('.express').fadeIn('slow'); }, 450);
			setTimeout(function(){ $('.node').fadeIn('slow'); }, 600);
			setTimeout(function(){ $('.html').fadeIn('slow'); }, 750);
			setTimeout(function(){ $('.css').fadeIn('slow'); }, 900);
			setTimeout(function(){ $('.mysql').fadeIn('slow'); }, 1050);
			setTimeout(function(){ $('.github').fadeIn('slow'); }, 1200);
			
		}
	});
	// if($(document).scrollTop() < $('#about').offset().top){
	// 	console.log($('#about').offset().top);
	// }
	// var typed = new Typed('.typing', {
 //  		strings: ["First sentence.", "Second sentence."],
 //  		typeSpeed: 30
 //  	});
	var posOrNegArray = [-1, 1]
	var posOrNeg1 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar1 = Math.random() * 80 * posOrNeg1;
	var posOrNeg2 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar2= Math.random() * 80 * posOrNeg2;
	var posOrNeg3 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar3 = Math.random() * 80 * posOrNeg3;
	var posOrNeg4 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar4= Math.random() * 80 * posOrNeg4;
	var posOrNeg5 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar5 = Math.random() * 80 * posOrNeg5;
	var posOrNeg6 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar6 = Math.random() * 80 * posOrNeg6;
	var posOrNeg7 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar7 = Math.random() * 80 * posOrNeg7;
	$('.bee-1').backgroundMove({
		movementStrength: `${randVar1}`
	});
	$('.bee-2').backgroundMove({
		movementStrength: `${randVar2}`
	});
	$('.bee-3').backgroundMove({
		movementStrength: `${randVar3}`
	});
	$('.bee-4').backgroundMove({
		movementStrength: `${randVar4}`
	});
	$('.bee-5').backgroundMove({
		movementStrength: `${randVar5}`
	});
	$('.bee-6').backgroundMove({
		movementStrength: `${randVar6}`
	});
	$('.bee-7').backgroundMove({
		movementStrength: `${randVar6}`
	});

	$('#typed-text').typeIt({
		strings: ["My name is Eddie.", "I'm a Full Stack Web Developer in Atlanta, GA.",
			"(And I used to study honey bees.)"],
		speed: 50,
		autoStart: false
	});

	$('.tech').hover(function(){
		$(this).children('a').fadeIn();
	},
	function(){
		$(this).children('a').fadeOut();
	});
});