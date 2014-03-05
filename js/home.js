$(document).ready(function() {
	$('article.half div:first-child').click(function() {
		$(this).parent().toggleClass('active');
	});
	$('.retina').retinaReplace();
});