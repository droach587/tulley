var mainJs = (function () {
 		
 		/**
 		 * Avoid Console Errors
 		 *
 		 * 
 		 */
		(function() {
		    var method;
		    var noop = function () {};
		    var methods = [
		        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		        'timeStamp', 'trace', 'warn'
		    ];
		    var length = methods.length;
		    var console = (window.console = window.console || {});
		
		    while (length--) {
		        method = methods[length];
		
		        // Only stub undefined methods.
		        if (!console[method]) {
		            console[method] = noop;
		        }
		    }
		}());
		
		var SELECTORS = {
			MOBILE_TOGGLE: '.js-mobile-toggle',
			MAIN_NAV: '.js-main-nav',
			PRIMARY_NAV: '.primary-nav',
			NAV_JUMPS: '.js-main-nav li a, .js-jumplink'
		}
		
		var CLASSES ={
			VISIBLE_NAV: 'mobile-visible'
		}
		
		var mainNav = false;
		var navHeight = $(SELECTORS.PRIMARY_NAV).outerHeight();
		
		$(window).resize(function(){
			navHeight = $(SELECTORS.PRIMARY_NAV).outerHeight();
		});
 		
 		
 		/**
 		 * Simple Init Function
 		 *
 		 * 
 		 */
        function init() {
            mobileToggle();
            flexSlider();
            jumpNav();
        }
        
        function mobileToggle(){
	        $(SELECTORS.MOBILE_TOGGLE).on('click', function(e){
		        
		        mainNav = !mainNav;
		        if(mainNav){
			        $(SELECTORS.MAIN_NAV).find('li').each(function(){
				        $(this).addClass(CLASSES.VISIBLE_NAV);
			        });
			        $(SELECTORS.PRIMARY_NAV).css('max-height', 'inherit');
			        $(this).addClass('toggle-open');
		        }else{
			        $(SELECTORS.MAIN_NAV).find('li').each(function(){
				        $(this).removeClass(CLASSES.VISIBLE_NAV);
			        });
			        $(SELECTORS.PRIMARY_NAV).removeAttr('style');
			        $(this).removeClass('toggle-open');
		        }
	        });
        }
        
        function flexSlider(){
	        $('.flexslider').flexslider({
		        directionNav: true,
		        controlNav: false,
		        animation: 'slide'
	        });
        }
        
        function jumpNav(){
	        $(SELECTORS.NAV_JUMPS).on('click', function(e){
		       var location = $(this).attr('href');
				
				if($(location).length > 0){		       
			       $('html, body').stop().animate({
				      scrollTop: $(location).offset().top - navHeight - 60
			       },500, function(){
				       return false;
			       });
			       
			       if(mainNav){
				       $(SELECTORS.MOBILE_TOGGLE).trigger('click');
			       }
			       
		       }else{
			       return false;
		       }
		       e.preventDefault();
	        });
        }
 
 
        /**
         * Reveal All Methods here
         *
         * 
         */
        return {
            init 	:	init
        };
})();