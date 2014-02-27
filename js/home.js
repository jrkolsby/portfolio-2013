var something = 0,
	blurPage = function() {
		var a = $('article.full').add('section.halfwrap');
		for (var i = 0; i <= a.length; i++) {
			if ($(a).hasClass('full')) {
				a.addClass('shadow');
			}
			var b = $(a[i]).children();
			for (var j = 0; j <= b.length; j++) {
				$(b[j]).addClass('blur');
			}
		}
	},
	loadPost = function(half) {
		var content = {
			'title': half.children('h1').html(),
			'body': half.children('h2').html()
		}
		$('#post .inner h1').html(content['title']);
		$('#post .inner h2').html(content['body']);
		
	}
$(document).ready(function() {
	
	$('#close').click(function() {
		$('article.half.active').removeClass('active');
		$('#post').removeClass('active');
		$('.blur').removeClass('blur');
		$('.shadow').removeClass('shadow');
	});
	$('article.half').click(function() {
		$(this).addClass('active');
		loadPost($(this));
		blurPage();
		$('#post').addClass('active');
	});
});