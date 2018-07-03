$(document).ready(function() {
	
$( window ).load(function() {
  resizeWindow();
  // load mini month calendar
  var miniCal = $('#miniVigCal');
  if(typeof(miniCal.data("month")) != 'undefined'){
  	//MakeDate();
  	miniCal.zabuto_calendar({
      cell_border: true,
      today: true,
      // show_days: false,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fa fa-chevron-circle-left"></i>',
        next: '<i class="fa fa-chevron-circle-right"></i>'
      },
      action: function () {
          return selectDateInMiniMonth(this.id, false);
      },
      action_nav: function () {
          return myNavFunction(this.id);
      }
      
    });	
  }
  
});

$( window ).resize(function() {
  resizeWindow();
});


////////////////
});



function resizeWindow(){
	
	var wid = $( window ).width();;
  	var hei = $( window ).height();
  
  	var containL = $('#mainLeft');
  	var containR = $('#mainRight');
  	var mainViewObj = $('#mainView');
  	var topbarObj = $('#topbarMenu');
  	
  	var fcVigCal = $('#fcVigCal');
  	var fcWidgetRight = $('#fcWidgetRight');
  	
  	var mainDayViewObj = $('#mainDayView');
  	var comingContainObj = $('#comingContain');
  	
  	var leftWid = containL.width();
  	var leftHei = containL.height();
  	var topbarMenu = topbarObj.height();
  	var mainDayView = mainDayViewObj.height();
  	
  	var isShowWidget = true;
  	var paddingBox = 10;
  	
  	/////////////////
  	var modeView = 'day';
  	$(".tabView").each(function(){
		if($(this).hasClass('tabActive')){
			modeView = $(this).data('view');
		}
	});
	
	if(modeView == 'day'){
		containL.show();
		
		// alert(wid);
		containR.removeClass('mainRightWM');
		containR.addClass('mainRight');
		
		mainViewObj.height(hei - topbarObj.height());
		containL.height(hei - topbarObj.height());
	  	containR.width(wid - containL.width() - 40 - 20 - 10);
	  	containR.height(hei - topbarObj.height() - 20 - 10);
	  	var heiComing = $('#miniMonth').height()  + $('#eventComing').height() + $('#currentDate').height() + $('#leftToday').height();
	  	// $('#comingContain').height(containL.height() - (90 + 30 + 15 + 250));
	  	$('#comingContain').height(containL.height() - heiComing);
	  	
		fcVigCal.width(containR.width() - fcWidgetRight.width() - 2 - 20);
		// //set height
		// fcVigCal.height(containR.height());
		// fcWidgetRight.height(containR.height());
		// // set height of big calendar
		// fcVigCal.fullCalendar('option', 'height', containR.height());
	} else if (modeView == 'week'){
		containL.hide();
		
		wid = (wid > 1000) ? wid : 1000;
		containR.removeClass('mainRight');
		containR.addClass('mainRightWM');
		
		containR.width(wid - 20);
		containR.height(hei - topbarObj.height() - 20);
		fcVigCal.width(containR.width() - fcWidgetRight.width() - 20);
		// //set height
		// fcVigCal.height(containR.height());
		// fcWidgetRight.height(containR.height());
		// // set height of big calendar
		// fcVigCal.fullCalendar('option', 'height', containR.height());
	} else if (modeView == 'month'){
		containL.hide();
		
		wid = (wid > 1000) ? wid : 1000;
		containR.removeClass('mainRight');
		containR.addClass('mainRightWM');
		containR.width(wid - 20);
		containR.height(hei - topbarObj.height() - 20);
		fcVigCal.width(containR.width() - fcWidgetRight.width() - 20);
		
	} else { //list view
		
		isShowWidget = false;
	}
	
	// show widget right side
	if(isShowWidget){
		// wgTaskBoxCnt
		var wgTaskBoxCntObj = $('#wgTaskBoxCnt');
		var wgNoteBoxCntObj = $('#wgNoteBoxCnt');
		var heiTotal = containR.height() - ($('.wgMenu').height() + $('.wgHeader').height()*2);
		
		wgTaskBoxCntObj.height(heiTotal/2);
		wgNoteBoxCntObj.height(heiTotal/2 - 10);
		
		//set height
		fcVigCal.height(containR.height());
		fcWidgetRight.height(containR.height());
		// set height of big calendar
		fcVigCal.fullCalendar('option', 'height', containR.height());
	}
}

