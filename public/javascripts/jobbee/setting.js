$(document).ready(function() {
	
	
	//tab menu
	$("#iconMenu").click(function(e){
		var msgTitle = "Delete confirmation";
		var msg = "Do you want to delete this?";
		$("#dialog-confirm").html(msg);
		$( "#dialog-confirm" ).dialog({
	      	resizable: false,
	        modal: true,
	        title: msgTitle,
	        height: 150,
	        width: 400,
	        buttons: {
	            "Yes, Delete all": function () {
	                $(this).dialog('close');
	                callback(true);
	            },
	            "No, thanks": function () {
	                $(this).dialog('close');
	                callback(false);
	            }
	        }
	    });
	});
	
	function callback(value) {
	    if (value) {
	        alert("Confirmed");
	    } else {
	        alert("Rejected");
	    }
	}
	
	/////////////////////////////////////
	//mini month today
	//miniCalToday
	$("#iconLocation").click(function(e){
		alert('today');
	    
	});
	// $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      // var button = $(this);
      // if (!rails.allowAction(button)) return rails.stopEverything(e);
      // rails.handleRemote(button);
      // return false;
    // });
	////////////////////////////////////
	
});
///////////////////////////////////////////////

//save change calendar
function saveChangeCal(){
	var calNameObj = $('#calName');
	var calColorObj = $('#calColor');
	var colorID = calColorObj.data('calcolor');
	var calName = $.trim(calNameObj.val());
	
	var url = "settings/saveCalendar.json?";
	var data = {
		"calnm": calName,
		"clrId": colorID
	};
	var	dataType = null;
	var method = null;
	$.ajax({
		url: url, type: method || 'POST', data: data, cache: false,
		success: function(res){
			if(res.error == 0){//updated successful
				$.miniNoty('Saved changes!', "success");
				// $('#setContainer').fadeOut();
				
			} else {
				$.miniNoty(res.description, "error");
			}
		},
		beforeSend : function(xhr, settings) {
			// $('#loading').show();
		},
		complete : function(xhr, status) {
			// $('#loading').hide();
		}
	});
	
	// $.miniNoty('Text messange is success <br>Working is perfect!', "success");
	// return false;
}

//close popup profile
function closeProfile(){
    var popupProfile = $('#popUserProfile');
    popupProfile.fadeOut();
};

//edit context
function editContext(id, ctnm){
	var obj = $("#calName" + id);
	var str = '<form method="post" action="settings/editContext?id='+id+'" data-remote="true" >';
	str += '<input type="text" name="ctnm" value="'+ctnm+'" style="width:95%;" />';
	str += '<input type="hidden" />';
	str += '</form>';
	obj.html(str);
}

//close setting
function closeSetting(){
    var popupSet = $('#setContainer');
    popupSet.fadeOut();
};

//skinSelItem
function showSkinBG(){
	var obj = $('#bgColorBox');
	obj.toggle();
}

//selBGItem
function selBGItem(id){
	var obj = $('#bgItem' + id);
	$('.bgBorder').each(function(){
		$(this).css("border-color","#FFFFFF");
	});
	obj.css("border-color","red");
	//set background
	for(var i = 0; i <= 23; i++){
		$('#skinSelItem').removeClass("bg" + i);//background seleted
		$('#setBackground').removeClass("bg" + i);//setting header
		$('#bodyBg').removeClass("bg" + i);//body
	}
	$('#skinSelItem').addClass("bg" + id);
	
	//setting
	$('#setBackground').addClass("bg" + id);//setting header
	$('#bodyBg').addClass("bg" + id);//body
	
}

//show calendar box color
function showCalColorBox(){
	$('#calColorBox').show();
}

//select color for calendar
function selectItem(color, colorID){
	var calColorObj = $('#calColor');
	calColorObj.css('background-color', color);
	calColorObj.data('calcolor',colorID);
	//set for hidden field
	$('#h_clrId').val(colorID);
	$('#calColorBox').hide();
}

//close color box
function closeColorBox(){
	$('#calColorBox').hide();
}

//save profile button
function saveProfiles(){
	var email = $('#uEmail').val();
	var lnameObj = $('#lname');
	var fnameObj = $('#fname');
	var oPassObj = $('#oldpass');
	var nPassObj = $('#newpass');
	var cfmPassObj = $('#cfmnewpass');
	
	// var url = "users/update_user_profile.json?email="+email+"&lname="+lnameObj.val()+"&fname="+fnameObj.val();
	var url = "users/update_user_profile.json?";
	var data = {
		"email": email,
		"lname": lnameObj.val(),
		"fname": fnameObj.val()
	};
	var	dataType = null;
	var method = null;
	var isOk = true;
	
	//check change password of user
	if(oPassObj.val() != ''){
		//check new password
		if(nPassObj.val() != cfmPassObj.val()){
			$.miniNoty('Password and Confirm Password are not matching!', "error");
			isOk = false;
		} else if((nPassObj.val()!='') && (cfmPassObj.val() != '') && (nPassObj.val() == cfmPassObj.val())){
			data.old_pass = oPassObj.val();
			data.new_pass = nPassObj.val(); 
		}
	}
	
	if(isOk){
		$.ajax({
			url: url, type: method || 'POST', data: data, cache: false,
			success: function(res){
				if(res.error == 0){//updated successful
					$.miniNoty('Saved changes!', "success");
					$('#setContainer').fadeOut();
				} else {
					$.miniNoty(res.description, "error");
				}
			},
			beforeSend : function(xhr, settings) {
				// $('#loading').show();
			},
			complete : function(xhr, status) {
				// $('#loading').hide();
			}
		});
	}
}

//change tab setting
function changeTabSetting(tab){
	$(".setMenuItem").each(function(){
		var tabSet = $(this).data('mode');
		if(tab == tabSet){
			$(this).addClass('setMenuItemActive');
			$('#setTitle').html(tabSet);
		} else {
			$(this).removeClass('setMenuItemActive');
		}
	});
	// check to show/hide add button
	var addNewObj = $('#addNewObj');
	if((tab == 'Calendars') || (tab == 'Contexts')){
		addNewObj.show();
		addNewObj.data('mode', tab);
	} else {
		addNewObj.hide();
	}
}

//load setting
function loadSetting(view){
	var url = "settings/" + view;
	var data = "";
	var	dataType = null;
	var method = null;
	
	$.ajax({
		url: url, type: method || 'GET', data: data, cache: false,
		success: function(result){
			// alert(result);
			var popupCntObj = $("#bgShowPopup");
			popupCntObj.html(result);
			
		},
		beforeSend : function(xhr, settings) {
			// $('#loading').show();
		},
		complete : function(xhr, status) {
			// $('#loading').hide();
		}
	});
}

//load tab setting
function loadTabSetting(view){
	var url = "settings/" + view;
	var data = "";
	var	dataType = null;
	var method = null;
	
	$.ajax({
		url: url, type: method || 'GET', data: data, cache: false,
		success: function(result){
			// alert(result);
			var popupCntObj = $("#setContent");
			popupCntObj.html(result);
			
		},
		beforeSend : function(xhr, settings) {
			// $('#loading').show();
		},
		complete : function(xhr, status) {
			// $('#loading').hide();
		}
	});
}







