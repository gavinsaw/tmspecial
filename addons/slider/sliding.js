var carousel;
$(document).ready(function () {
	//
    carousel = $("#fullbg ul");
    carousel.itemslide({
        one_item: true, //Set this for proper full screen navigation
		disable_scroll: true,
		disable_slide: true,
		duration: 1000
    }); //initialize itemslide
	carousel.gotoSlide(10); 
	showTlTitle(10);
    $(window).resize(function () {
        carousel.reload();
    }); //Recalculate width and center positions and sizes when window is resized
	carousel.on('changeActiveIndex', function(ev) {
		console.log(carousel.getActiveIndex());
		var v = carousel.getActiveIndex();
		showTlTitle(v);
		if (v === 2) {
			$("#ytv_1")[0].src += "&autoplay=1";
		} else if (v === 6) {
			$("#ytv_2")[0].src += "&autoplay=1";
		} else if (v === 8) {
			$("#ytv_3")[0].src += "&autoplay=1";
		} else if (v === 9) {
			$("#ytv_4")[0].src += "&autoplay=1";
		} 
		ev.preventDefault();
	});
});

// time lapse 
function showTlTitle(n) { 
	for (var i=0; i <= 27; i++) {
		$('#tl_info'+i).hide();
		$('#tl_left_km'+i).hide();
		$('#tl_center_km'+i).hide();
		$('#tl_right_km'+i).hide();
		$('#tl_info'+i).css({'opacity': 0, 'margin-top': '-140px'});
	}
	$('#tl_info'+n).fadeIn('medium').animate({opacity: 1, marginTop: 0}, 1000, 'easeOut');
	$('#tl_left_km'+n).delay(600).show();
	$('#tl_center_km'+n).delay(600).show();
	$('#tl_right_km'+n).delay(600).show();
}
//
function showSlider(n) {
	carousel.gotoSlide(n); 
}