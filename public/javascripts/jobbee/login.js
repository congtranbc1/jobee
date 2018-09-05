

$(document).ready(function() {

    // sign up button
	$('#signupBtn').click(function(){
		// validate account
		var isOk = validateAccount();
		//submit form
		if (isOk){
			var email = $('#email').val();
			check_exist(email);
			// $('#frmRegister').submit();	
		}
	});
	// process key presss to sign up	
	$('#email, #password').keyup(function(e){
		var key = e.keyCode;
		if(key == 13){//enter key
			// validate account
			var isOk = validateAccount();
			//submit form
			if (isOk){
				// check user exist
				var email = $('#email').val();
				check_exist(email);
				// $('#frmRegister').submit();	
			}
		}
	});
	
	// sign in button
	$('#signinBtn').click(function(){
		signIn();
	});
	$('#si_password, #si_email').keyup(function(e){
		var key = e.keyCode;
		if(key == 13){
			signIn();	
		}
	});
	
	//click on body will hide popup
	$(document).on("click", function() {
	  $(".popup").hide("fast");
	});
	
	//click on user account button, it will stop event
	$("#userAccount").click(function(e){
	  e.stopPropagation();
	});

	// recoveryBtn
	$('#recoveryBtn').click(function(){
		// validate account
		var isOk = validateAccount();
		//submit form
		if (isOk){
			// check user exist

			// send recovery password
			recoveryPass();	
		} else {
			var msgError = $('#msgError');
			msgError.text('Email invalid!');//reset msg
		}
	});
	
/////////////////////////////////////////
});


//sign in feature
function signIn(){
	var emailObj = $('#si_email');
	var email = $.trim(emailObj.val());
	var passObj = $('#si_password');
	var pass = $.trim(passObj.val());
	var url = "/sign_in_account.json?email=" + email + "&pass=" + pass;
	var data = {};
	var msgObj = $('#msgError');
	msgObj.text('');
	
	$.ajax({
		url: url, 
		method: "POST",
		data: data,
		success: function(res){
			var error = res.error;
			if(error == 0){//user sign in successful 
				location.href = "/profile";
			} else { // show wrong password
				msgObj.show();
				msgObj.text(res.description);
			}
		},
        error: function(res){
        	//show error
        }
    });
}

//check user existed
function check_exist(email){
	var email = $.trim(email);
	var url = "/check_exist.json?email=" + email ;
	var data = {};
	var msgObj = $('#msgError');
	msgObj.text('');
	
	$.ajax({
		url: url, 
		method: "GET",
		data: data,
		success: function(res){
			var error = res.error;
			if(error == 0){//user dose not exist 
				// submit form
				$('#frmRegister').submit();
			} else { // user existed
				msgObj.show();
				msgObj.text(res.description);
				$('#email').focus();
			}
		},
        error: function(res){
        	//show error
        }
    });
}
// validate password
function validateAccount(){
	var emailObj = $('#email');
	var passObj = $('#password');
	// var cfm_passwordObj = $('#cfm_password');
	var msgError = $('#msgError');
	msgError.text('');//reset msg
	// alert(passObj.val() + ' == okk == ' + cfm_passwordObj.val());
	
	var msg = "";
	if(( typeof(emailObj.val())=='undefined' ) || ($.trim(emailObj.val()) == '')){
		msg = "Email cannot blank";
		emailObj.focus();
	} else if(!validateEmail(emailObj.val())){
		msg = "Email invalid!";	
		emailObj.focus();
	} else if(( typeof(passObj.val())=='undefined' ) || ($.trim(passObj.val()) == '')){
		msg = "Password can not blank";
		passObj.focus();
	// } else if(( typeof(cfm_passwordObj.val())=='undefined' ) || ($.trim(cfm_passwordObj.val()) == '')){
		// msg = "Confirm Password can not blank";
		// cfm_passwordObj.focus();
	} else if(passObj.val().length < 4){
		msg = "Password must have minimum 4 characters";
		passObj.focus();
	// } else if($.trim(passObj.val()) != $.trim(cfm_passwordObj.val())){
		// msg = "Password and Confirm Password are not the same";
		// passObj.focus();
	}
	if(msg != ''){
		msgError.show();
		msgError.text(msg);	
		return false;
	} else {
		msgError.hide();
		msgError.text('');
		return true;
	}
	
}

//test email
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}

// recoveryPass, recovery password of the user
function recoveryPass(){
	var emailObj = $('#email');
	var email = $.trim(emailObj.val());
	var url = "/sign_in_account.json?email=" + email + "&pass=" + pass;
	var data = {};
	var msgObj = $('#msgError');
	msgObj.text('');
	
	$.ajax({
		url: url, 
		method: "POST",
		data: data,
		success: function(res){
			var error = res.error;
			if(error == 0){//user sign in successful 
				location.href = "/profile";
			} else { // show wrong password
				msgObj.show();
				msgObj.text(res.description);
			}
		},
        error: function(res){
        	//show error
        }
    });
}