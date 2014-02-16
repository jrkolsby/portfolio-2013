$(document).ready(function() {
	$('article.half').mousedown(function(event) {
		if ($(this).hasClass('active')) {
		    event.stopPropagation();
		    console.log('STOP');			
		}
		$('article.half.active').removeClass('active');
		$(this).addClass('active');
		console.log('ACTIVATE');
	});
	$('html').click(function() {
		if ($('article.half.active').length > 0) {
			$('article.half.active').removeClass('active');
		    console.log('DEACTIVATE');	
		}
	});
});