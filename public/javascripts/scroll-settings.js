// safari likes to jump to the hash too early,
// so we wait til the page loads and manually set it
var $scroll_me_to = window.location.hash;
window.location.hash = "";

$(window).load(function(){
	
	$.localScroll({
		easing:'easeOutExpo',
		stop:true,
		queue:true,
		duration:700,
		offset: {left:0, top:-70},
		hash:true,
		onAfter: trigger
	});

	// bind the navigation clicks to update the selected nav:
	$('#navigation').find('a').click(selectNav);

	// handle nav selection - lots of nice chaining :-)
	function selectNav() {
		$(this)
    			.parents('ul:first') // find the first UL parent
      			.find('a') // find all the A elements
        				.removeClass('selected') // remove from all
      				.end() // go back to all A elements
    				.end() // go back to 'this' element
    			.addClass('selected');
		return false;
	}

	function trigger(data) {
  	// within the #navigation element, find the = element
  	// whose href ends with ID ($= is ends with)
		var el = $('#navigation').find('a[href$="' + data.id + '"]').get(0);
  
  	// we're passing the actual element, and not the jQuery instance.
		selectNav.call(el);
	}

	if ($scroll_me_to) {
		$("#navigation a[href='" + $scroll_me_to + "']").click();	
	}
});