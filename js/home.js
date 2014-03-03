$(document).ready(function() {
	$('#close').click(function() {
		$('article.half.active').removeClass('active');
	});
	$('article.half').click(function() {
		$(this).addClass('active');
	});
});