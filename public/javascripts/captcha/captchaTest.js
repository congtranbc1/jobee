
//client
// https://codepedia.info/convert-html-to-image-in-jquery-div-or-table-to-jpg-png/
//https://github.com/niklasvh/html2canvas/releases

// server
//https://www.onlineocr.net/
// https://blog.5rabbits.com/breaking-captchas-from-scracth-almost-753895fade8a


$(document).ready(function() {
	console.log('okk, captcha start');
	
	// capture();
	
	// console.log('done');
	
/////////////////////////////////////////

    // function capture() {
        // $('#img_captcha').html2canvas({
            // onrendered: function (canvas) {
                // //Set hidden field's value to image data (base-64 string)
                // var data = canvas.toDataURL("image/png");
                // $('#img_val').val(data);
//                 
                // console.log(data);
//                 
                // //Submit the form manually
                // // document.getElementById("myForm").submit();
            // }
        // });
    // }




/////////////////////////////////////////////////

// var element = $("#html-content-holder"); // global variable
var element = $("#img_captcha"); // global variable

var getCanvas; // global variable

    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });
    
    
    $("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    console.log(newData);
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
});


});

