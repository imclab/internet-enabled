$(document).ready(function() {
	$banner = $("h2.banner");
	$banner.css("opacity", 0);
	
	$excitements = [
		"Nice.",
		"Thank You!",
		"Great!",
		"Perfect!",
		"Excellent!",
		"Brilliant!"
	]
	
	function browser_message(upgraded) {
		var intro = "";
		var message = "";
		var followup = "";
		var request = "";
		var directions = "";
		if (upgraded) {
			var random = Math.floor((Math.random() * $excitements.length));
			intro = $excitements[random];
			message = "You may now use " + upgraded + ".";
			followup = "Congratulations on your new Investment.";
			request = "You've Made the Internet a Better Place.";
			directions = "Double Click Downloaded File to Complete Installation.";
		} else if ($.system.browser.ie || $.system.browser.netscape) {
			intro = "Hello!";
			message = "You are using " + $.system.browser.name + ".";
			followup = "Become Standards Compliant.";
			request = "Upgrade your Browser.";
			directions = "Choose One Below.";
		} else {
			intro = "Hello!";
			message = "You are using " + $.system.browser.name + ".";
			followup = "This is Great News.";
			request = "You've Made the Internet a Better Place.";
		}
		var html = intro + "\n<br/>";
		html += "<span>" + message + "</span>\n<br/>";
		html += "<span>" + followup + "</span>\n<br/>";
		html += "<span>" + request + "</span>\n";
		if (directions != "")
			html += "<br/><span class='directions'>" + directions + "</span>";
		return html;
	}
	
	$banner.html(browser_message());
	$banner.animate({opacity:1}, 1000);
	
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
	
	$("a").each(function(index, element) {
		$link = $(element);
		if ($link.attr("href").match(/^http/))
			$link.attr("target", "_blank");
	});
	
	$("pre.code").each(function(index, element) {
		$el = $(element);
		$el.replaceWith("<br/><textarea class='text-field full' readonly='readonly'>" + $el.html()  + "</textarea>");
	});
	
	$(".download_browser a").each(function(index, element) {
		var el = $(element);
		el.removeAttr("target");
		el.addClass("installBrowser");
		var browser = el.attr("rel");
		var browserUrl = el.attr("href");
		// change it to download url
		var downloadUrl = $.installer.urlFor(browser.toLowerCase());
		el.attr("href", downloadUrl);
		el.after("<br/><a class='actual_browser bland' target='_blank' href='" + browserUrl + "'>" + browser + "</a>");
	});
	
	$("a.installBrowser").each(function(index, element) {
		var el = $(element);
		var browser = el.attr("rel");
		el.click(function() {
			$banner.delay(1500).animate({opacity:0}, 400, function() {
				$banner.html(browser_message(browser));
				$banner.animate({opacity:1}, 1000);
			});
		});
		el.hover(function() {
			el.stop().animate({top:-2}, 200, function() {
				el.animate({top:2}, 150);
			})
		}, function() {
			el.stop().animate({top:14}, 200, function() {
				el.animate({top:10}, 150);
			})
		})
	})
})