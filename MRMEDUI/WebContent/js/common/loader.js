/**
 * 
 */

jQuery.getScript("/constant.js")
	.done(function() {
		alert('success');
		/* yay, all good, do something */
	})
	.fail(function() {
		alert('failure');
		/* boo, fall back to something else */
});

jQuery.getScript("../libs/bootstrap/bootstrap.min.js");

jQuery.getScript("../model/loginM.js");