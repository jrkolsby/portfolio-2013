$(document).ready(function() {
	$('#blur').click(function() {
		$('article.half.active').removeClass('active');
		$(this).removeClass('active');
	});
	$('article.half').click(function() {
		$(this).addClass('active');
		$('#blur').addClass('active');
	});
});