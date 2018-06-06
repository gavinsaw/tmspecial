// JavaScript Document
var subNav;
var selectedSubNav;
$(function() {
	//disable drag
	$('img').bind('dragstart', function(){
	  return false; 
	});
	//icon animation
	$('.icon_dot2').hide();
	$('.icon_dot').click(function(e) {
		e.preventDefault();
		$('.icon_dot').fadeOut('medium', function() {
			$('.icon_dot2').fadeIn('medium');
		});
	});
	$('.icon_dot2').click(function(e) {
		e.preventDefault();
		$('.icon_dot2').fadeOut('medium', function() {
			$('.icon_dot').fadeIn('medium');
		});
	});	
	var social_click = 0;
	$('.icon_social').on('click', function(e) {
		e.preventDefault();
		if (social_click === 0) {
			$('.icon_fb').animate({top: '75px', opacity: 1}, 800, 'easeOutBounce');
			$('.icon_tw').delay(200).animate({top: '135px', opacity: 1}, 1000, 'easeOutBounce');
			social_click = 1;
		} else {
			$('.icon_fb').animate({top: '-50px', opacity: 0}, 200, 'easeInOut');
			$('.icon_tw').animate({top: '-50px', opacity: 0}, 200, 'easeInOut');
			social_click = 0;
		}	
  	});
	// hide gallery list
	$('.gl').hide();
	// show hide gallery
	$('.icon_dot').on('click', function(e) {
		e.preventDefault();
		$('.tl').slideUp('medium');
		galleryAni();
	});
	$('.icon_dot2').on('click', function(e) {
		e.preventDefault();
		$('.gl').fadeOut('medium');
		$('.tl').slideDown('medium');
	});
	// date sub navigation mouse over
	$('.d_left').hover( function(e) {
		e.preventDefault();
		$('.d_img_left').stop().animate({marginLeft: '-18px'}, 200, 'easeOut');
		$(this).removeClass('back');
    	$(this).addClass('orange');
  	}, function(e) {
		e.preventDefault();
		$('.d_img_left').stop().animate({marginLeft: '0px'}, 200, 'easeOut');
    	$(this).removeClass('orange');
    	$(this).addClass('black');
  	});
	$('.d_right').hover( function(e) {
		e.preventDefault();
		$('.d_img_right').stop().animate({marginRight: '-18px'}, 200, 'easeOut');
		$(this).removeClass('back');
    	$(this).addClass('orange');
  	}, function(e) {
		e.preventDefault();
		$('.d_img_right').stop().animate({marginRight: '0px'}, 200, 'easeOut');
    	$(this).removeClass('orange');
    	$(this).addClass('black');
  	});
	// date sub navigation click
	$('.d_right').on('click', function(e) {
		e.preventDefault();
		$('.l'+subNav).hide();
		selectedSubNav = Number(subNav) + 1;
		$('.l'+selectedSubNav).slideDown('slow');
		subNav = selectedSubNav;
		if(subNav >= 2) {
			$(this).fadeOut('medium');
			$('.d_left').fadeIn('medium');
		} else {
			$(this).fadeIn('medium');
			$('.d_left').fadeIn('medium');
		}
	});
	$('.d_left').on('click', function(e) {
		e.preventDefault();
		$('.l'+subNav).hide();
		selectedSubNav = Number(subNav) - 1;
		$('.l'+selectedSubNav).slideDown('slow');
		subNav = selectedSubNav;
		if(subNav <= 1) {
			$(this).fadeOut('medium');
			$('.d_right').fadeIn('medium');
		} else {
			$(this).fadeIn('medium');
			$('.d_right').fadeIn('medium');
		}
	});
	// date content navigation
	$('#c_nav_left').hover( function(e) {
		e.preventDefault();
		$('.arrow_left').stop().animate({left: '40px'}, 400, 'easeOut');
		$('#cn_left').removeClass('c_nav_bg');
    	$('#cn_left').addClass('c_nav_over_bg');
  	}, function(e) {
		e.preventDefault();
		$('.arrow_left').stop().animate({left: '20px'}, 400, 'easeOut');
    	$('#cn_left').addClass('c_nav_bg');
    	$('#cn_left').removeClass('c_nav_over_bg');
  	});
	$('#c_nav_right').hover( function(e) {
		e.preventDefault();
		$('.arrow_right').stop().animate({right: '40px'}, 400, 'easeOut');
		$('#cn_right').removeClass('c_nav_bg');
    	$('#cn_right').addClass('c_nav_over_bg');
  	}, function(e) {
		e.preventDefault();
		$('.arrow_right').stop().animate({right: '20px'}, 400, 'easeOut');
    	$('#cn_right').addClass('c_nav_bg');
    	$('#cn_right').removeClass('c_nav_over_bg');
  	});
	// date carousel
	$('#carousel_1').show();
	$('#carousel_2').hide();
	$('#carousel_3').hide();
	$('#cn_btn1, #cn_btn2, #cn_btn3').hover( function(e) {
		e.preventDefault();
		$(this).css('cursor','pointer');
  	}, function(e) {
		e.preventDefault();
		$(this).css('cursor','default');
  	});	
	$('#cn_btn1').on('click', function(e) {
		e.preventDefault();
		$(this).attr("src","img/tl_dot_over.png");
		$('#cn_btn2').attr("src","img/tl_dot.png");
		$('#cn_btn3').attr("src","img/tl_dot.png");
		$('#carousel_1').fadeIn('medium');
		$('#carousel_2').hide();
		$('#carousel_3').hide();
		$("#carousel_ytv_1")[0].src += "&autoplay=1";
	});
	$('#cn_btn2').on('click', function(e) {
		e.preventDefault();
		$(this).attr("src","img/tl_dot_over.png");
		$('#cn_btn1').attr("src","img/tl_dot.png");
		$('#cn_btn3').attr("src","img/tl_dot.png");
		$('#carousel_1').hide();
		$('#carousel_2').fadeIn('medium');
		$('#carousel_3').hide();
	});
	$('#cn_btn3').on('click', function(e) {
		e.preventDefault();
		$(this).attr("src","img/tl_dot_over.png");
		$('#cn_btn1').attr("src","img/tl_dot.png");
		$('#cn_btn2').attr("src","img/tl_dot.png");
		$('#carousel_1').hide();
		$('#carousel_2').hide();
		$('#carousel_3').fadeIn('medium');
	});
});	

// gallery content animation
function galleryAni() {
	$('.gl').fadeIn('medium');
	$('.img_box').css({'opacity': 0});
	$('#g1').delay(400).animate({opacity: 1}, 600, 'easeOut');
	$('#g2').delay(600).animate({opacity: 1}, 600, 'easeOut');
	$('#g3').delay(800).animate({opacity: 1}, 600, 'easeOut');
	$('#g4').delay(1000).animate({opacity: 1}, 600, 'easeOut');
	$('#g5').delay(1200).animate({opacity: 1}, 600, 'easeOut');
	$('#g6').delay(1400).animate({opacity: 1}, 600, 'easeOut');
	$('#g7').delay(1600).animate({opacity: 1}, 600, 'easeOut');
	$('#g8').delay(1800).animate({opacity: 1}, 600, 'easeOut');
	$('#g9').delay(2000).animate({opacity: 1}, 600, 'easeOut');
	$('#g10').delay(2200).animate({opacity: 1}, 600, 'easeOut');
	$('#g11').delay(2400).animate({opacity: 1}, 600, 'easeOut');
	$('#g12').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g13').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g14').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g15').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g16').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g17').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g18').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g19').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g20').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g21').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g22').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g23').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g24').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g25').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g26').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g27').delay(2600).animate({opacity: 1}, 600, 'easeOut');
	$('#g28').delay(2600).animate({opacity: 1}, 600, 'easeOut');
}

// gallery item mouse over
function titleOver(n) {
	$('#t'+n).stop().animate({bottom: '20px'}, 400, 'easeOut');
}
function titleOut(n) {
	$('#t'+n).stop().animate({bottom: '60px'}, 400, 'easeOut');
}

// day page sub navigation
function currentSubNav(n) {
	subNav = n;
	if(subNav >= 2) {
		$('.d_right').fadeOut('medium');
		$('.d_left').fadeIn('medium');
	} else if(subNav <= 1) {
		$('.d_right').fadeIn('medium');
		$('.d_left').fadeOut('medium');
	}
}

// day page content animation
function contentAni() {
	$('.image').css({'margin-left': '-500px', 'opacity': 0});
	$('.c_bg').css({'opacity': 0});
	$('.c_info').css({'opacity': 0});
	$('.c_share').css({'opacity': 0});
	$('.c_nav').css({'opacity': 0});
	$('.image').delay(800).animate({marginLeft: '0px', opacity: 1}, 600, 'easeOut', function() {
		$('.c_bg').delay(300).animate({opacity: 1}, 600, 'easeOut');
		$('.c_info').delay(600).animate({opacity: 1}, 600, 'easeOut');
		$('.c_share').delay(900).animate({opacity: 1}, 600, 'easeOut');
		$('.c_nav').delay(1200).animate({opacity: 1}, 600, 'easeOut');
  	});
}

function contentAni2() {
	$('.c_bg').css({'opacity': 0});
	$('.c_info').css({'opacity': 0});
	$('.c_share').css({'opacity': 0});
	$('.c_nav').css({'opacity': 0});
	$('.c_bg').delay(300).animate({opacity: 1}, 600, 'easeOut');
	$('.c_info').delay(600).animate({opacity: 1}, 600, 'easeOut');
	$('.c_share').delay(900).animate({opacity: 1}, 600, 'easeOut');
	$('.c_nav').delay(1200).animate({opacity: 1}, 600, 'easeOut');
}

// open social popup
function PopupCenter(url, title, w, h) {
  var userAgent = navigator.userAgent,
      mobile = function() {
        return /\b(iPhone|iP[ao]d)/.test(userAgent) ||
          /\b(iP[ao]d)/.test(userAgent) ||
          /Android/i.test(userAgent) ||
          /Mobile/i.test(userAgent);
      },
      screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft,
      screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop,
      outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
      outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : document.documentElement.clientHeight - 22,
      targetWidth = mobile() ? null : w,
      targetHeight = mobile() ? null : h,
      V = screenX < 0 ? window.screen.width + screenX : screenX,
      left = parseInt(V + (outerWidth - targetWidth) / 2, 10),
      right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
      features = [];
  if (targetWidth !== null) {
    features.push('width=' + targetWidth);
  }
  if (targetHeight !== null) {
    features.push('height=' + targetHeight);
  }
  features.push('left=' + left);
  features.push('top=' + right);
  features.push('scrollbars=1');

  var newWindow = window.open(url, title, features.join(','));

  if (window.focus) {
    newWindow.focus();
  }
}

// swap image
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}