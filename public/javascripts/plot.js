$('head').append('<link rel="stylesheet" href="/stylesheets/jquery.jqplot.min.css" type="text/css" />');
load_chart_scripts();

var chart_scripts = [];
function load_chart_scripts() {
	if ($.system.browser.ie)
		chart_scripts.push("/javascripts/excanvas.min.js");
	chart_scripts.push("/javascripts/jquery.jqplot.min.js");
	chart_scripts.push("/javascripts/jqplot.categoryAxisRenderer.min.js");
	chart_scripts.push("/javascripts/jqplot.barRenderer.min.js");
	chart_scripts = chart_scripts.reverse();
	load_next_script();
}
function load_next_script() {
  if (chart_scripts.length > 0) {
		var url = chart_scripts.pop();
		$.getScript(url, load_next_script);
	} else {
		render_performance_chart();
	}
}

var plot1 = null;
function render_performance_chart() {
	line1 = [1,4,9, 16];
	line2 = [25, 12.5, 6.25, 3.125];
	plot1 = $.jqplot('chart1', [line1, line2], {
	    legend:{show:true, location:'ne'},title:'Bar Chart',
	    series:[
	        {label:'Profits', renderer:$.jqplot.BarRenderer}, 
	        {label:'Expenses', renderer:$.jqplot.BarRenderer}
	    ],
	    axes:{
	        xaxis:{renderer:$.jqplot.CategoryAxisRenderer}, 
	        yaxis:{min:0}
	    }
	});
}