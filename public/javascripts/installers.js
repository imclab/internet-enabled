;(function( $ ){
	$.installer = {
		installPaths: {
			// for mac 10.5 and later
			"chrome": {
				"mac": "http://dl.google.com/chrome/mac/beta/GoogleChrome.dmg",
				"windows": "http://dl.google.com/update2/installers/ChromeSetup.exe",
				"linux": "http://dl.google.com/update2/installers/ChromeSetup.exe"
			},
			"firefox": {
				"mac": "http://download.mozilla.org/?product=firefox-3.6.3&os=osx&lang=en-US",
				"windows": "http://download.mozilla.org/?product=firefox-3.6.3&os=win&lang=en-US",
				"linux": "http://download.mozilla.org/?product=firefox-3.6.3&os=linux&lang=en-US"
			},
			"safari": {
				"mac": {
					"snow_leopard": "http://appldnld.apple.com.edgesuite.net/content.info.apple.com/Safari4/061-7783.20100311.sfrew/Safari4.0.5SnowLeopard.dmg",
					"leopard": "http://appldnld.apple.com.edgesuite.net/content.info.apple.com/Safari4/061-7781.20100311.Sfr45/Safari4.0.5Leopard.dmg",
					"tiger": "http://appldnld.apple.com.edgesuite.net/content.info.apple.com/Safari4/061-7785.20100311.TgrS4/Safari4.0.5Tiger.dmg",
				},
				// only works with xp, vista, and 7
				"windows": "http://appldnld.apple.com.edgesuite.net/content.info.apple.com/Safari4/061-7779.20100311.Wndsf/SafariSetup.exe"
			},
			"opera": {
				"mac": "http://www.opera.com/download/get.pl?id=32813",
				"windows": ""
			}
		},
		
		urlFor: function(browser) {
			os_key = $.system.os.name.toLowerCase();
			var url = $.installer.installPaths[browser][os_key];
			if (typeof url != "string") {
				url = $.installer.installPaths[browser][$.system.os.name.toLowerCase()][$.system.os.key];
			}
			return url;
		},
		
		download: function(browser) {
			window.location = $.installer.urlFor(browser);
		}
	}
})(jQuery);