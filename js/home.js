var something = 0,
	loadPost = function(half) {
		var content = {
			"title": half.children("h1").html(),
			"body": half.children("h2").html()
		}
		$("#post .inner h1").html(content['title']);	
		$("#post .inner h2").html(content['body']);	
	}
$(document).ready(function() {
	$('#post').click(function() {
		$('article.half.active').removeClass('active');
		$(this).removeClass('active');
	});
	$('article.half').click(function() {
		$(this).addClass('active');
		loadPost($(this));
		$('#post').addClass('active');
	});
});