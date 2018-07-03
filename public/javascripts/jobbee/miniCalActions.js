

$(document).ready(function() {
	
	// click on today button of mini calendar
	$('#miniToday').click(function(){
		// show today for fc
		$('#fcVigCal').fullCalendar('today');
	});

	
	
/////////////////////////////////////////
});

//select date of mini calendar
function selectDateInMiniMonth(id, fromModal) {
	var arrDate = id.split('_');
	var date = new Date(arrDate[arrDate.length - 1]);
	// alert("Date: " + arrDate[arrDate.length - 1]);
	var weekViewCalObj = $('#fcVigCal');
	weekViewCalObj.fullCalendar( 'gotoDate', date );
	
}

function myNavFunction(id) {
	// alert('nav: '+id);
    // $("#date-popover").hide();
    // var nav = $("#" + id).data("navigation");
    // var to = $("#" + id).data("to");
    // console.log('nav ' + nav + ' to: \ + to.month + '/' + to.year);
}