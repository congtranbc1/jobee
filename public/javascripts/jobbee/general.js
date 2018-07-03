
//show popup user profile
function showPopupProfile(){
	alert('comming soon');
}

$(document).ready(function() {
	// $('.calDetaiCnt').niceScroll({cursoropacitymax:0.8,cursorwidth:1});
	// $("#comingContain").niceScroll({cursoropacitymax:0.8,cursorwidth:1});
	// $("#wgTaskBoxCnt").niceScroll({cursoropacitymax:0.8,cursorwidth:1});
	// $("#wgNoteBoxCnt").niceScroll({cursoropacitymax:0.8,cursorwidth:1});
	// $("#miniMonth").niceScroll({cursoropacitymax:0.8,cursorwidth:1});
	// $('body').niceScroll(config);


	// user profile
	$('#userAccount').click(function(){
		var obj = $('#userProfile');
		obj.show();
	});
	
	// mpInformation
	$('#mpInformation').click(function(){
		var obj = $('#userInfo');
		// obj.toggle('fast');
		obj.animate({
	        height: 'toggle'
	    });
	});
	
/////////////////////////////////////////
});

