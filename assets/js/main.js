/*
*	MAIN JS FILE for Willsong
*
*/
(function(){

// Element Schemas to parallax
var _window = $(window),
	blog_header = {
		alias: $('#head_content_willsong'),
		slowness: 0.5
	}

var scrollTop = _window.scrollTop();

// Functions to run the parallax

function updateParallax(){
	window.requestAnimationFrame(function(){
		setScrollTops();
		animateElements();
	});
}

function setScrollTops() {
	scrollTop = _window.scrollTop();
}

function animateElements() {
	blog_header.alias.css({
		'opacity' : 1 - (scrollTop / 240)
	});
}

scrollIntervalID = setInterval(updateParallax, 10);

$('article').fitVids();
$('pre').addClass('prettyprint');
prettyPrint();

})();