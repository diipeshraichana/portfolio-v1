(function() {
	var getAge = function(){
		var d1 = new Date("05/01/1990");
	    d2 = Date.now();
	    var diff = d2 - d1;
	    var age = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365.25));
	    $(".personalDetails p span").text(age);
	}
	var bindEvents = function() {
		$(".contactTitle .btn").on("click",openModal);
		$(".fa.fa-times-circle.closeBtn").on("click",closeModal);
		$("li a,.scroll-up,.scroll-down").click(function(e) {
			e.stopPropagation();
		    $("li.active").removeClass("active");
		    var section = $(this).attr("href");
		    $(this).parent("li").addClass("active");
		    $("html, body").animate({
		        scrollTop: $(section).offset().top
		    },500);
		    $(".navbar-toggler").trigger("click");
		});
	}
	function applyScrollSpy() {
		$('.navbar').on('activate.bs.scrollspy', function() 
		{
			window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
		});
	}
	var openModal = function() {
		$(".contactTitle .btn").addClass("to-circle");
		$(".cd-modal-bg").addClass("modal-is-visible");
		$(".cd-modal").addClass("modal-is-visible");
		$("body").css("overflow","hidden");
		$(".navbar").css("z-index",2);
	}
	var closeModal = function() {
		$(".contactTitle .btn.to-circle").removeClass("to-circle");
		$(".cd-modal-bg.modal-is-visible").removeClass("modal-is-visible");
		$(".cd-modal.modal-is-visible").removeClass("modal-is-visible");
		$("body").css("overflow","auto");
		$(".navbar").css("z-index",3);
	}
	var navBarPositionHandler = function() {
	    var heroTop =  $("menu").offset().top;
	    var footerHeight = $("footer .container").outerHeight()+$("#contact").outerHeight()+$(".navbar").outerHeight();
	    var heroHeight =  $("#hero").outerHeight();
	    if(($(window).scrollTop()+160) >= heroHeight ) {
	   		$("menu").addClass("fixed");
	   		if($(window).scrollTop()+100>=($(document).outerHeight()-footerHeight)){
	   			$("menu").removeClass("fixed");
	   			$(".navbar").css("top",($(document).outerHeight()-footerHeight))
	   		} else {
	   			$(".navbar").css("top","115px");
	   		}
	    } else {
	   		$("menu").removeClass("fixed");
	   		$(".navbar").css("top",heroHeight);	
	    }


	}
	$(document).ready(function(){
		getAge();
		applyScrollSpy();
		bindEvents();
	});
	$(window).on('DOMContentLoaded load resize scroll', navBarPositionHandler); 
})();