var POST_HOME = 'http://blog.deadlypenguin.com/blog/api/get_recent_posts/?count=3';

var display_posts = function (data) {
	jQuery.each(data.posts, function (index, value) {
		var html;

		html = '\t\t\t\t<div class="feed-item">';
		html = html + '\t\t\t\t\t<h3><a href="'+value.url+'">'+value.title+'</a></h3>';
		html = html + '\t\t\t\t\t<p>'+value.excerpt+'</p>';
		html = html + '\t\t\t\t\t<p class="who"><span class="author"><a href="'+value.author.url+'">'+value.author.name+'</a></span> - <span class="when">'+value.date+'</span></p>';
		html = html + '\t\t\t\t</div>';

		jQuery('#blog').append(html);
	});
};

var load_posts = function () {
	jQuery.ajax({
		url: POST_HOME,
		success: display_posts,
		dataType: 'jsonp'
	});
};

jQuery(document).ready(load_posts);