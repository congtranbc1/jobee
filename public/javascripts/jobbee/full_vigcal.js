	
$(document).ready(function() {
	//default load day view
	var calObj = $('#fcVigCal');
	
	// load calenda
	loadCalendar('agendaDay');
	
	//when click
	$(".tabView").click(function(e){
		//remove active tab
		$(".tabView").each(function(){
			$(this).removeClass('tabActive');
		});
		$(this).addClass('tabActive');
		//load data
		var modeView = $(this).data('view');
		if(modeView == 'day'){
			// loadDayView();	
			calObj.fullCalendar( 'changeView', 'agendaDay' );
			resizeWindow();
			
		} else if(modeView == 'week'){
			calObj.fullCalendar( 'changeView', 'agendaWeek' );
			resizeWindow();
		} else if(modeView == 'month'){
			// loadDayView('month');
			calObj.fullCalendar( 'changeView', 'month' );
			resizeWindow();
		} else { //list view
			resizeWindow();
		}
	    
	});
	
	// get timezone
	function getCurrentTimezone(){
		if (!sessionStorage.getItem('timezone')) {
		  var tz = jstz.determine() || 'UTC';
		  sessionStorage.setItem('timezone', tz.name());
		}
		var currTz = sessionStorage.getItem('timezone');
		return currTz;
	}
	
	// loadCalendar
	function loadCalendar (view){
		calObj.fullCalendar({
			customButtons: {
		        myCustomButton: {
		            text: 'List',
		            click: function() {
		                alert('clicked the custom button!');
		            }
		        }
		    },
			header: {
				left: 'today prev,next ',
				// center: 'agendaDay,agendaWeek,month,myCustomButton',
				center: 'title',
				// right:  'title'
				right: " "
			},
			//defaultDate: '2015-12-12',
			selectable: true,
			firstDay: 0, //default is sunday
			defaultView: view,
			selectHelper: true,
			// contentHeight:200,
			//height: 500,
			select: function(start, end) {
				quickAddEvent(start, end);
				
				// user drag/drop to create new event
				// addEventObj(calObj, start, end);
			},
			editable: true,
			showTimeIndicator: true,
			eventLimit: true, // allow "more" link when too many events
			events: function(start, end, timezone, callback) {
		        //get events
		        timezone = getCurrentTimezone();
				getEvents(start, end, timezone, callback);
		    },
			viewRender: function (view) {
		        try {
		            // setTimeline(calObj);
		        } catch (err) {}
		    }
		});
	}
	
	// quick add event
	function quickAddEvent(start, end){
		var title = prompt('Event Title:');
		var eventData;
		if (title) {
			eventData = {
				title: title,
				start: start,
				end: end
			};
			calObj.fullCalendar('renderEvent', eventData, true); // stick? = true
			
			// call ajax to save event
			saveEvent(eventData);
		}
		calObj.fullCalendar('unselect');
	}
	
	// saveEvent
	function saveEvent(event){
		var url = "objects/saveEvent.json?";
		
		console.log(JSON.stringify(event));
		
		var timezone = getCurrentTimezone();
		var data = {
			"title": event.title,
			"st": moment(event.start, timezone).unix() + '',
			"et": moment(event.end, timezone).unix() + ''
		};
		
		console.log(JSON.stringify(data));
		
		var	dataType = null;
		var method = "POST";
		// $.ajax({url: url, success: function(res){
	        // alert(JSON.stringify(res));
	    // }});
	    
	    
		$.ajax({
			url: url, type: method || 'POST', data: data, cache: false,
			success: function(res){
				console.log(JSON.stringify(res));
				
				if(res.status == 0){//updated successful
					$.miniNoty('Saved changes!', "success");
					// $('#setContainer').fadeOut();
					// alert(JSON.stringify(res));
					
				} else {
					$.miniNoty(res.des, "error");
					// alert(JSON.stringify(res));
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
	
	function getEvents(start, end, timezone, callback){
		var url = "objects/getEvents.json?";
		var	dataType = null;
		var method = "GET";
		var data = '';
	    
		$.ajax({
			url: url, type: method || 'GET', data: data, cache: false,
			success: function(res){
				console.log(res.events);
				
				var events = convertToEvents(res.events, timezone);
				// console.log(JSON.stringify(events));
				
                // $(res).find('event').each(function() {
                    // events.push({
                        // title: $(this).attr('title'),
                        // start: $(this).attr('start') // will be parsed
                    // });
                // });
                callback(events);
			},
			beforeSend : function(xhr, settings) {
				// $('#loading').show();
			},
			complete : function(xhr, status) {
				// $('#loading').hide();
			}
		});
	}
	
	
	
	// convert to events and show on calendar
	function convertToEvents(events, timezone){
		
		
		// console.log(getCurrentTimezone());
		
		var arrEvents = [];
		if (events && events.length > 0){
			for(var i = 0; i < events.length; i++){
				var item = events[i];
				
				console.log(moment(1461139200));
				
				// if( !item.eventStartDateTime && !item.eventEndDateTime){
					
					var title = ((typeof(item.taskName) != 'undefined') && $.trim(item.taskName) != '') ? item.taskName : 'Untitled';
					var obj = {
						'title': title,
						'start': moment(item.eventStartDateTime*1000),
						'end': moment(item.eventEndDateTime*1000)
					};
					console.log('-------------------');
					console.log(JSON.stringify(obj));
					//convert and push
					arrEvents.push(obj);
				// }
				
			}
		}
		return arrEvents;
	}
	
	////////////////////////////////////////////////////////////////////////
	
	//loadDayView
	function loadDayView(view, calObj){
		// var calObj = $('#fcVigCal');
		// calObj.show();
		
		calObj.fullCalendar({
			customButtons: {
		        myCustomButton: {
		            text: 'List',
		            click: function() {
		                alert('clicked the custom button!');
		            }
		        }
		    },
			header: {
				left: 'today prev,next ',
				// center: 'agendaDay,agendaWeek,month,myCustomButton',
				center: 'title',
				// right:  'title'
				right: " "
			},
			//defaultDate: '2015-12-12',
			selectable: true,
			firstDay: 0, //default is sunday
			defaultView: view,
			selectHelper: true,
			// contentHeight:200,
			//height: 500,
			select: function(start, end) {
				/*var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					calObj.fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				calObj.fullCalendar('unselect');
				*/
				// user drag/drop to create new event
				addEventObj(calObj, start, end);
			},
			editable: true,
			showTimeIndicator: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
			        title:"My repeating event",
			        start: '10:00', // a start time (10am in this example)
			        end: '14:00', // an end time (6pm in this example)
			        dow: [ 1, 4 ] // Repeat monday and thursday
			    }
			],
			viewRender: function (view) {
		        try {
		            // setTimeline(calObj);
		        } catch (err) {}
		    }
		});
	}
	
	//create new event
	function addEventObj(fullCalObj, st, et){
		//show pop up quick add event
		var evePopup = $('#eveContainer');
		evePopup.show();
		var obj = $('#objTitle');
		obj.focus();
		obj.val('');
		var eventData = {};
		
		// saveEve
		$("#saveEve").click(function(){
		  var title = obj.val();
		  if(title){
		  	eventData = {
				title: title,
				start: st,
				end: et
			};
			// alert(eventData);
		  	// fullCalObj.fullCalendar('renderEvent', eventData, true); // stick? = true
		  	//addEvent
		  	// fullCalObj.fullCalendar('addEvent', eventData);
		  	$('#fcVigCal').fullCalendar('renderEvent', eventData);
		  }
		  $('#fcVigCal').fullCalendar('unselect');
		  
		  //hide popup
		  evePopup.hide();
		});
				
		//$.miniNoty('Event created successful!', "success");
	}
	
	//loadListView
	function loadListView(){
		
	}

////////////////////////////////////////////

});

function saveEventObj(){
	//show pop up quick add event
	$('#frmAddEve').submit();
	
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var newEvent = {
        title:"My repeating event",
        start: '10:00', // a start time (10am in this example)
        end: '14:00', // an end time (6pm in this example)
        dow: [ 1, 4 ] // Repeat monday and thursday
   };
    var calObj = $('#fcVigCal');
    calObj.fullCalendar( 'renderEvent', newEvent);
    calObj.fullCalendar('unselect');
    
	//$.miniNoty('Event created successful!', "success");
}