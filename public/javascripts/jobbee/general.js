
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

    //change language
    $('#lang').change(function(){
        var lang = $('#lang').val();
        changeLanguage(lang);
    });

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


//change language
function changeLanguage(lang) {
    var url = "/utils/changeLanguage.json?locale=" + lang;
    var data = {};
    $.ajax({
        url: url,
        method: "POST",
        data: data,
        success: function(res){
            var error = res.error;
            if(error == 0){//user sign in successful
                location.reload();
            }
        },
        error: function(res){
            //show error
        }
    });
}

