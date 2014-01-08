$(document).ready(function(){

	$('header').hide();

	$(document).scroll(function () {
		var y = $(this).scrollTop();
		var coords = "0 " + (-y/5) + "px";

		if (y > 300) {
			$('header').slideDown("slow", function(){});

		} else {
			$('header').slideUp("slow", function(){});
		}

		$("#tech-unit").css("background-position", coords);

	});
    
});