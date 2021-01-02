(function ($) {
    "use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	$('.color-palate .colors-list .palate').on('click', function() {
		var newThemeColor = $(this).attr('data-theme-file');
		var targetCSSFile = $('link[id="theme-color-file"]');
	   $(targetCSSFile).attr('href',newThemeColor);
	   $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
	});


}(jQuery));