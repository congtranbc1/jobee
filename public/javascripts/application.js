// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function maxWindow() {
	/*window.moveTo(0, 0);

	if (document.all) {
		top.window.resizeTo(screen.availWidth, screen.availHeight);
	} else if (document.layers || document.getElementById) {
		if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
			top.window.outerHeight = screen.availHeight;
			top.window.outerWidth = screen.availWidth;
		}
	}*/
}

// get token
function getToken(){
	csrf_token = $('meta[name=csrf-token]').attr('content');
	csrf_param = $('meta[name=csrf-param]').attr('content');
	return csrf_param + '=' + csrf_token;	
}

// add (len - number.length) zero before
// ex: addZeroBefore(10, 4) =>  0010
function addZeroBefore(number, len){
	sNumber = number + '';
	if(sNumber.length < len){
		zero = '';
		for(i=0; i < (len - sNumber.length); i++){
			zero += '0';
		}
		sNumber = zero + sNumber;
	}
	return sNumber
}