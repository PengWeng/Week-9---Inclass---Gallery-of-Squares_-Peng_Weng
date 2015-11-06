// $(document).ready(function(){

// 	var height = $('.gallery').children('img').height();
// 	var width = $('.gallery').children('img').width();


// 	if { height > width {
// 		$('img').addClass('landscape');
// 	};

// 	else{
// 		$('img').addClass('portrait');
// 	};

// });

//-------------------------------

$(document).ready(function() {

	$('.galimg img')
		
		.each(function() {

			var $photo = $(this);

			if ($photo.width() > $photo.height() ){
				$photo.addClass('landscape');
			} //1. If the width of the image is bigger than the height, apply the .landscape class
			
			else {
				$photo.addClass('portrait');

			}//2. If the height of the image is bigger than the width, apply .portrait class
		});


	$('.galimg').each(function(){
		var $width = $() 
		$(this).css('width', width)
		height = width
	}); 
	//a square crop


	// var resizeboxes = function() {
	// 	$(this)
	// }

});
