$(document).ready(function() {
	var message = "You are using " + $.system.browser.name + ".";
	var followup = "";
	var request = "";
	if ($.system.browser.ie || $.system.browser.netscape) {
		followup = "Become Standards Compliant.";
		request = "Upgrade your Browser.";
	} else {
		followup = "This is Great News.";
		request = "You've Made the Internet a Better Place.";
	}
	$("span#browser_message").html(message);
	$("span#browser_followup").html(followup);
	$("span#browser_request").html(request);
	
	$("h2.banner").html($("h2.banner #front_page").html());
	
	// http://ejohn.org/blog/javascript-performance-rundown/
	// 29379, 9517, 4966, 4414, 3517, 2966, 2828, 2690
	var graph_data = [
		[29379, "IE 7 (worst)"],
		[9517, "IE 8 Beta 2"],
		[4966, 'Opera 9.5.2'],
		[4414, 'Safari 3.1.2'],
		[3517, 'Firefox 3.0.1'],
		[2966, 'Firefox 3.1'],
		[2828, 'Safari 4.0.0'],
		[2690, 'Chrome Beta 1']
	];
	
	$("#performance_graph").jqBarGraph({
		data: graph_data,
		width: 500,
		colors: ['#122A47','#1B3E69'],
		color: '#1A2944',
		barSpace: 5,
		title: '<h3>Browser Javascript Performance Test<br/><small>Time (ms)</small></h3>'
	});
})