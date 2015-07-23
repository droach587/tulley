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
			PRIMARY_NAV: '.primary-nav'
		}
		
		var CLASSES ={
			VISIBLE_NAV: 'mobile-visible'
		}
		
		var mainNav = false;
 		
 		
 		/**
 		 * Simple Init Function
 		 *
 		 * 
 		 */
        function init() {
            mobileToggle();
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
 
 
        /**
         * Reveal All Methods here
         *
         * 
         */
        return {
            init 	:	init
        };
})();
/**
 * Simple App JS Launcher
 * deps: jQuery
 * 
 */  
 
if (window.jQuery) {  
    $(document).ready(function(){
        mainJs.init({});	
    });
} else {
    console.log('jQuery Dependency is NOT Loaded, please check source');
}
