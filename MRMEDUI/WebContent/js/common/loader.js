/**
 * 
 */

jQuery.getScript("constant.js")
	.done(function() {
		alert('success');
		/* yay, all good, do something */
	})
	.fail(function() {
		alert('failure');
		/* boo, fall back to something else */
});

jQuery.getScript("../libs/jquery/jquery-2.2.4.min.js");
jQuery.getScript("../libs/bootstrap/bootstrap.min.js");